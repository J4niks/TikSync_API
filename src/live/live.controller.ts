import { Request, Response } from 'express';
import { liveManager } from './live.manager';

export const startLive = async (req: Request, res: Response) => {
  const { username } = req.body;

  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      await liveManager.connect(username);
      return res.json({ status: 'connected', username });
    } catch (e: any) {
      attempts++;
      console.error(`[Live] Erro na tentativa ${attempts}/${maxAttempts}: ${e.message}`);

      // Reseta o estado da conexão antes de tentar novamente
      // Isso corrige o erro "Live já conectada" nas tentativas seguintes
      try {
        liveManager.disconnect();
      } catch (cleanupErr) {
        // Ignora erros de limpeza se já estiver desconectado
      }

      if (attempts >= maxAttempts) {
        return res.status(503).json({ error: `Falha ao conectar após várias tentativas: ${e.message}` });
      }

      // Espera 2 segundos antes de tentar novamente
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
};

export const stopLive = (_req: Request, res: Response) => {
  liveManager.disconnect();
  res.json({ status: 'disconnected' });
};