import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  const payload = verifyToken(token);
  if (!payload) return res.status(403).json({ error: 'Token inválido ou expirado' });

  // opcional: salvar info do usuário no request
  req.user = payload;
  next();
};