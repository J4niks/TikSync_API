import express from 'express';
import { login } from '../controllers/auth.controller';

const router = express.Router();

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Autentica o usuário e retorna um token JWT
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nome de usuário
 *                 example: "meuUsuario"
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "minhaSenha123"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT que deve ser usado no header Authorization
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Usuário ou senha inválidos
 */
router.post('/login', login);

export default router;