import { Request, Response } from "express";
import * as worldService from "../services/world.service";
import type { World } from "../models/world.model";

// 1️⃣ Pega todos os mundos
export const getWorldsController = async (req: Request, res: Response) => {
  const data: World[] = await worldService.getWorlds();
  res.json(data);
};

// 2️⃣ Pega mundo por ID
export const getWorldByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data: World[] = await worldService.getWorldById(id);
  res.json(data);
};

// 3️⃣ Download de UM mundo (STREAM)
export const getWorldFolderByWorldIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const response = await worldService.getWorldFolderByWorldId(id);

  res.setHeader(
    "Content-Disposition",
    response.headers["content-disposition"]
  );
  res.setHeader("Content-Type", response.headers["content-type"]);

  response.data.pipe(res);
};

// 4️⃣ Download de TODOS os mundos (STREAM)
export const getAllWorldFoldersController = async (
  req: Request,
  res: Response
) => {
  const response = await worldService.downloadAllWorlds();

  res.setHeader(
    "Content-Disposition",
    response.headers["content-disposition"]
  );
  res.setHeader("Content-Type", response.headers["content-type"]);

  response.data.pipe(res);
};

// 5️⃣ Save
export const saveWorldController = async (_: Request, res: Response) => {
  await worldService.saveWorld();
  res.json({ ok: true });
};

// 6️⃣ Save by ID
export const saveWorldByIdController = async (req: Request, res: Response) => {
  await worldService.saveWorldById(req.params.id);
  res.json({ ok: true });
};
