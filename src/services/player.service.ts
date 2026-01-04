import { api } from "../utils/api";
import type { Player } from "../models/player.model";


export const getOnlinePlayers = async (): Promise<Player[]> => {
  const response = await api.get<Player[]>("/v1/players");
  return response.data;
};

export const getAllPlayers = async (): Promise<Player[]> => {
  const response = await api.get<Player[]>("/v1/players/all");
  return response.data;
};

export const getPlayerInventoryById= async (playerUuid:string, worldUuid:string): Promise<Player[]> => {
  const response = await api.get<Player[]>(`/v1/players/${playerUuid}/${worldUuid}/inventory`);
  return response.data;
};

export const getPlayerById = async (uuid:string): Promise<Player[]> => {
  const response = await api.get<Player[]>(`/v1/players/${uuid}`);
  return response.data;
};

