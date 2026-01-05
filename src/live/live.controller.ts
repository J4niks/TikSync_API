import { Request, Response } from 'express';
import { liveManager } from './live.manager';

export const startLive = async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    await liveManager.connect(username);
    res.json({ status: 'connected', username });
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};

export const stopLive = (_req: Request, res: Response) => {
  liveManager.disconnect();
  res.json({ status: 'disconnected' });
};