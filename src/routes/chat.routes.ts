import { Router } from "express";
import * as chatController from "../controllers/chat.controller";

const router = Router();

router.post("/broadcast", chatController.broadcastMessage);
router.post("/private", chatController.privateMessage);

export default router;