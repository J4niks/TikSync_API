import { Router } from "express";
import * as playerController from "../controllers/player.controller";

const router = Router();

/**
 * @openapi
 * /players:
 *   get:
 *     summary: Lista todos os jogadores online
 *     tags:
 *       - Players
 *     responses:
 *       200:
 *         description: Lista de jogadores online
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Player'
 */
router.get("/", playerController.getOnlinePlayersController);

/**
 * @openapi
 * /players/all:
 *   get:
 *     summary: Lista todos os jogadores (online e offline)
 *     tags:
 *       - Players
 *     responses:
 *       200:
 *         description: Lista de todos os jogadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Player'
 */
router.get("/all", playerController.getAllPlayersController);

/**
 * @openapi
 * /players/{playerUuid}/{worldUuid}/inventory:
 *   get:
 *     summary: Retorna o inventário de um jogador específico em um mundo
 *     tags:
 *       - Players
 *     parameters:
 *       - in: path
 *         name: playerUuid
 *         required: true
 *         schema:
 *           type: string
 *         description: UUID do jogador
 *       - in: path
 *         name: worldUuid
 *         required: true
 *         schema:
 *           type: string
 *         description: UUID do mundo
 *     responses:
 *       200:
 *         description: Inventário do jogador retornado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "minecraft:diamond_sword"
 *                       count:
 *                         type: integer
 *                         example: 1
 */
router.get("/:playerUuid/:worldUuid/inventory", playerController.getPlayerInventoryByIdController);

/**
 * @openapi
 * /players/{uuid}:
 *   get:
 *     summary: Retorna informações de um jogador pelo UUID
 *     tags:
 *       - Players
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         schema:
 *           type: string
 *         description: UUID do jogador
 *     responses:
 *       200:
 *         description: Jogador retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       404:
 *         description: Jogador não encontrado
 */
router.get("/:uuid", playerController.getPlayerByIdController);

export default router;
