import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { generateToken } from '../utils/jwt';
import { publicKey, privateKey } from '../config/rsa'; // novo arquivo que vamos criar
require('dotenv').config();

// Exemplo de usuário fixo (em produção você teria DB)
const user = {
  username: process.env.APP_USER,
  passwordHash: bcrypt.hashSync(process.env.APP_PASSWORD as string, 10),
};

/**
 * Endpoint para fornecer a chave pública ao front-end
 */
export const getPublicKey = (req: Request, res: Response) => {
  res.json({ publicKey });
};

/**
 * Endpoint de login que agora recebe senha criptografada via RSA
 */
export const login = (req: Request, res: Response) => {
  const { username, passwordEncrypted } = req.body;

  if (!username || !passwordEncrypted) {
    return res.status(400).json({ error: 'Usuário ou senha não fornecidos' });
  }

  try {
    // Descriptografa a senha recebida
    const passwordBuffer = Buffer.from(passwordEncrypted, 'base64');
    const password = crypto.privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      passwordBuffer
    ).toString();

    // Valida usuário e senha
    if (username !== user.username || !bcrypt.compareSync(password, user.passwordHash)) {
      return res.status(401).json({ error: 'Usuário ou senha incorretos' });
    }

    // Gera JWT
    const token = generateToken({ username });
    return res.json({ token });

  } catch (err) {
    console.error('Erro ao descriptografar senha:', err);
    return res.status(500).json({ error: 'Erro no servidor' });
  }
};