import { Request, Response } from "express";
import * as playerService from "../services/player.service";
import type { Player } from "../models/player.model";

// 1️⃣ Pega todos os jogadores online
export const getOnlinePlayersController = async (req: Request, res: Response) => {
  try {
    const players: Player[] = await playerService.getOnlinePlayers();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar jogadores online" });
  }
};

// 2️⃣ Pega todos os jogadores
export const getAllPlayersController = async (req: Request, res: Response) => {
  try {
    const players: Player[] = await playerService.getAllPlayers();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar todos os jogadores" });
  }
};

// 3️⃣ Pega inventário de um jogador por worldId
export const getPlayerInventoryByIdController = async (req: Request, res: Response) => {
  try {
    const { playerUuid, worldUuid } = req.params;
    const inventory: Player[] = await playerService.getPlayerInventoryById(playerUuid, worldUuid);
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar inventário do jogador" });
  }
};

// 4️⃣ Pega jogador por ID
export const getPlayerByIdController = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.params;
    const player: Player[] = await playerService.getPlayerById(uuid);
    res.json(player);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar jogador por ID" });
  }
};
