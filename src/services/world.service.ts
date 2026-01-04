import { api } from "../utils/api";
import type { World } from "../models/world.model";
import { AxiosResponse } from "axios";

export const getWorlds = async (): Promise<World[]> => {
  const response = await api.get<World[]>("/v1/worlds");
  return response.data;
};

export const getWorldById = async (id: string): Promise<World[]> => {
  const response = await api.get<World[]>(`/v1/worlds/${id}`);
  return response.data;
};

// 🔽 UM MUNDO — STREAM PURO
export const getWorldFolderByWorldId = async (
  id: string
): Promise<AxiosResponse<any>> => {
  return api.get(`/v1/worlds/${id}/download`, {
    responseType: "stream",
    decompress: false, // 🔴 CRÍTICO
  });
};

// 🔽 TODOS OS MUNDOS — STREAM PURO
export const downloadAllWorlds = async (): Promise<AxiosResponse<any>> => {
  return api.get("/v1/worlds/download", {
    responseType: "stream",
    decompress: false, // 🔴 CRÍTICO
  });
};

export const saveWorld = async (): Promise<void> => {
  await api.post("/v1/worlds/save");
};

export const saveWorldById = async (id: string): Promise<void> => {
  await api.post(`/v1/worlds/${id}/save`);
};
