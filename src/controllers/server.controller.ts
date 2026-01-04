import { Request, Response } from "express";
import * as serverService from "../services/server.service";

// 1️⃣ Ping
export const pingServerController = async (req: Request, res: Response) => {
  try {
    const data = await serverService.pingServer();
    res.json({ message: data });
  } catch (err) {
    res.status(500).json({ error: "Erro ao pingar servidor" });
  }
};

// 2️⃣ Server Info
export const getServerInfoController = async (req: Request, res: Response) => {
  try {
    const data = await serverService.getServerInfo();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar informações do servidor" });
  }
};

// 3️⃣ Whitelist
export const getWhitelistController = async (req: Request, res: Response) => {
  try {
    const data = await serverService.getWhitelist();
    res.json({ whitelist: data });
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar whitelist" });
  }
};

// 4️⃣ Plugins
export const getPluginsController = async (req: Request, res: Response) => {
  try {
    const data = await serverService.getPlugins();
    res.json({ plugins: data });
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar plugins" });
  }
};

// 5️⃣ Ops
export const getOpsController = async (req: Request, res: Response) => {
  try {
    const data = await serverService.getOps();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar ops" });
  }
};

// 6️⃣ Scoreboard
export const getScoreboardController = async (req: Request, res: Response) => {
  try {
    const data = await serverService.getScoreboard();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar scoreboard" });
  }
};

// 7️⃣ Advancements
export const getAdvancementsController = async (req: Request, res: Response) => {
  try {
    const data = await serverService.getAdvancements();
    res.json({ advancements: data });
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar advancements" });
  }
};

// 8️⃣ Scoreboard Objective
export const getScoreboardObjectiveController = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const data = await serverService.getScoreboardObjective(name);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar scoreboard objective" });
  }
};

// 9️⃣ Send Command
export const sendCommandController = async (req: Request, res: Response) => {
  try {
    const { command } = req.body;
    await serverService.sendCommand(command);
    res.json({ message: "Comando enviado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao enviar comando" });
  }
};

// 1️⃣0️⃣ Add to Whitelist
export const addToWhitelistController = async (req: Request, res: Response) => {
  try {
    const { uuid, name } = req.body;
    await serverService.addToWhitelist(uuid, name);
    res.json({ message: "Adicionado à whitelist" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar à whitelist" });
  }
};

// 1️⃣1️⃣ Add to Ops
export const addToOpsController = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.body;
    await serverService.addToOps(uuid);
    res.json({ message: "Adicionado como OP" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar OP" });
  }
};

// 1️⃣2️⃣ Add Plugin
export const addPluginController = async (req: Request, res: Response) => {
  try {
    const { downloadUrl } = req.body;
    await serverService.addPlugin(downloadUrl);
    res.json({ message: "Plugin adicionado" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar plugin" });
  }
};

// 1️⃣3️⃣ Remove from Whitelist
export const removeFromWhitelistController = async (req: Request, res: Response) => {
  try {
    const { uuid, name } = req.body;
    await serverService.removeFromWhitelist(uuid, name);
    res.json({ message: "Removido da whitelist" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao remover da whitelist" });
  }
};

// 1️⃣4️⃣ Remove OP
export const removeOpController = async (req: Request, res: Response) => {
  try {
    const { playerUuid } = req.body;
    await serverService.removeOp(playerUuid);
    res.json({ message: "OP removido" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao remover OP" });
  }
};