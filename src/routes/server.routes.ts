import { Router } from "express";
import * as serverController from "../controllers/server.controller";

const router = Router();

router.get("/ping", serverController.pingServerController);
router.get("/", serverController.getServerInfoController);
router.get("/whitelist", serverController.getWhitelistController);
router.get("/plugins", serverController.getPluginsController);
router.get("/ops", serverController.getOpsController);
router.get("/scoreboard", serverController.getScoreboardController);
router.get("/advancements", serverController.getAdvancementsController);
router.get("/scoreboard/:name", serverController.getScoreboardObjectiveController);

router.post("/exec", serverController.sendCommandController);
router.post("/whitelist", serverController.addToWhitelistController);
router.post("/ops", serverController.addToOpsController);
router.post("/plugins", serverController.addPluginController);

router.delete("/whitelist", serverController.removeFromWhitelistController);
router.delete("/ops", serverController.removeOpController);

export default router;
