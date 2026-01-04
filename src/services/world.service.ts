import { api } from "../utils/api";
import type { World } from "../models/world.model";

export const getWorlds = async (): Promise<World[]> => {
  const response = await api.get<World[]>("/v1/worlds");
  return response.data;
};

export const getWorldById = async (id: string): Promise<World[]> => {
  const response = await api.get<World[]>(`/v1/worlds${id}`);
  return response.data;
};

export const getWorldFolderByWorldId = async (id: string): Promise<World[]> => {
  const response = await api.get<World[]>(`/v1/worlds${id}/download`);
  return response.data;
};

export const getAllWorldFolders = async (): Promise<World[]> => {
  const response = await api.get<World[]>("/v1/worlds/download");
  return response.data;
};

export const saveWorld = async (): Promise<void> => {
  await api.post("v1/worlds/save").then(() => {
    console.log("mundo salvo");
  });
};

export const saveWorldById = async (id: string): Promise<void> => {
  await api.post(`v1/worlds/${id}/save`);
};
