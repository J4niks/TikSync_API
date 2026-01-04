import { Router } from "express";
import * as playerController from "../controllers/player.controller";

const router = Router();

// GET
router.get("/", playerController.getOnlinePlayersController); // /players
router.get("/all", playerController.getAllPlayersController); // /players/all
router.get("/:playerUuid/:worldUuid/inventory", playerController.getPlayerInventoryByIdController); // /players/:playerUuid/:worldUuid/inventory
router.get("/:uuid", playerController.getPlayerByIdController); // /players/:uuid

export default router;
