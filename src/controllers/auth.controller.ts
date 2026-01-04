import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
// Exemplo de usuário fixo (em produção você teria DB)
require("dotenv").config();
const user = {
  username: process.env.APP_USER,
  passwordHash: bcrypt.hashSync(process.env.APP_PASSWORD as string, 10),
};


export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username !== user.username || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: "Usuário ou senha incorretos" });
  }

  const token = generateToken({ username });
  return res.json({ token });
};