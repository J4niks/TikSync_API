import { Router } from "express";
import * as chatController from "../controllers/chat.controller";

const router = Router();

/**
 * @openapi
 * /chat/broadcast:
 *   post:
 *     summary: Envia uma mensagem para todos os jogadores online
 *     tags:
 *       - Chat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Olá, pessoal!"
 *     responses:
 *       200:
 *         description: Mensagem enviada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 sentTo:
 *                   type: integer
 *                   example: 12
 */
router.post("/broadcast", chatController.broadcastMessage);

/**
 * @openapi
 * /chat/private:
 *   post:
 *     summary: Envia uma mensagem privada para um jogador específico
 *     tags:
 *       - Chat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *               - playerUuid
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Oi, só para você!"
 *               playerUuid:
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Mensagem enviada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 player:
 *                   type: string
 *                   example: "JohnDoe"
 *       404:
 *         description: Jogador não encontrado
 */
router.post("/private", chatController.privateMessage);

export default router;
