import { api } from "../utils/api";
import type { ServerStatus } from "../models/server.model"
import type { ScoreboardBase } from "../models/scoreboard.model";
import type { Player } from "../models/player.model"
import qs from "qs"

export const pingServer = async (): Promise<string> => {
  const response = await api.get<string>("/v1/ping");
  return response.data;
};

export const getServerInfo = async (): Promise<ServerStatus[]> => {
  const response = await api.get<ServerStatus[]>("/v1/server");
  return response.data;
};

export const getWhitelist = async (): Promise<string> => {
  const response = await api.get<string>("/v1/server/whitelist");
  return response.data;
};

export const getPlugins = async (): Promise<string> => {
  const response = await api.get<string>("/v1/plugins");
  return response.data;
};

export const getOps = async (): Promise<Player[]> => {
  const response = await api.get<Player[]>("/v1/server/ops");
  return response.data;
};

export const getScoreboard = async (): Promise<ScoreboardBase> => {
  const response = await api.get<ScoreboardBase>("/v1/scoreboard");
  return response.data;
};

export const getAdvancements = async (): Promise<string> => {
  const response = await api.get<string>("/v1/advancements");
  return response.data;
};

export const getScoreboardObjective = async (name: string): Promise<ScoreboardBase> => {
  const response = await api.get<ScoreboardBase>(`/v1/scoreboard/${name}`);
  return response.data;
};

export const sendCommand = async (command: string): Promise<void> => {
  const formData = new FormData();
  formData.append("command", command);

  await api.post("/v1/server/exec", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // importante!
    },
  });
};

export const addToWhitelist = async (uuid: string, name: string): Promise<void> => {
  const body = qs.stringify({ uuid, name });

  await api.post("/v1/server/whitelist", body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const addToOps = async (playerUuid: string): Promise<void> => {
  const body = qs.stringify({ playerUuid });

  await api.post("/v1/server/ops", body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const addPlugin = async (downloadUrl: string): Promise<void> => {
  const body = qs.stringify({ downloadUrl });

  await api.post("/v1/plugins", body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const removeFromWhitelist = async (uuid: string, name: string): Promise<void> => {
  await api.delete("/v1/server/whitelist", {
    params: { uuid, name },
  });
};

export const removeOp = async (playerUuid: string): Promise<void> => {
  await api.delete("/v1/server/ops", {
    params: { playerUuid },
  });
};