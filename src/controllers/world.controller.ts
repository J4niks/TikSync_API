import { Request, Response } from "express";
import * as worldService from "../services/world.service";
import type { World } from "../models/world.model";

// 1️⃣ Pega todos os mundos
export const getWorldsController = async (req: Request, res: Response) => {
  try {
    const data: World[] = await worldService.getWorlds();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar mundos" });
  }
};

// 2️⃣ Pega mundo por ID
export const getWorldByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: World[] = await worldService.getWorldById(id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar mundo por ID" });
  }
};

// 3️⃣ Pega pasta do mundo por ID
export const getWorldFolderByWorldIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: World[] = await worldService.getWorldFolderByWorldId(id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar pasta do mundo" });
  }
};

// 4️⃣ Pega todas as pastas de mundos
export const getAllWorldFoldersController = async (req: Request, res: Response) => {
  try {
    const data: World[] = await worldService.getAllWorldFolders();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar todas as pastas de mundos" });
  }
};

// 5️⃣ Salvar todos os mundos
export const saveWorldController = async (req: Request, res: Response) => {
  try {
    await worldService.saveWorld();
    res.json({ message: "Todos os mundos salvos com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao salvar mundos" });
  }
};

// 6️⃣ Salvar mundo por ID
export const saveWorldByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await worldService.saveWorldById(id);
    res.json({ message: `Mundo ${id} salvo com sucesso` });
  } catch (err) {
    res.status(500).json({ error: "Erro ao salvar mundo por ID" });
  }
};
