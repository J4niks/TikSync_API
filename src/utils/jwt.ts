import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const SECRET: Secret = process.env.JWT_SECRET ?? "minha_chave_secreta_super_forte";

export const generateToken = (
  payload: object,
  expiresIn: jwt.SignOptions["expiresIn"] = "1h"
): string => {
  return jwt.sign(payload, SECRET, { expiresIn });
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, SECRET) as JwtPayload;
  } catch {
    return null;
  }
};