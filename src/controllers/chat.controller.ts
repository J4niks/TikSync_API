import { Request, Response } from "express";
import * as chatService from "../services/chat.service";

export const broadcastMessage = async (req: Request, res: Response) => {
  const { message } = req.body;
  await chatService.sendBroadcast(message);
  res.status(200).json({ message: "Broadcast enviado" });
};

export const privateMessage = async (req: Request, res: Response) => {
  const { message, playerUuid } = req.body;
  await chatService.sendPrivateMessage(message, playerUuid);
  res.status(200).json({ message: "Mensagem privada enviada" });
};