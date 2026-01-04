import { Router } from "express";
import * as worldController from "../controllers/world.controller";

const router = Router();

// GET
router.get("/", worldController.getWorldsController);
router.get("/:id", worldController.getWorldByIdController);
router.get("/:id/download", worldController.getWorldFolderByWorldIdController);
router.get("/download", worldController.getAllWorldFoldersController);

// POST
router.post("/save", worldController.saveWorldController);
router.post("/:id/save", worldController.saveWorldByIdController);

export default router;
