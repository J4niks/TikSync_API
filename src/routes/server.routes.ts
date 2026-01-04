import { Router } from "express";
import * as serverController from "../controllers/server.controller";

const router = Router();

/**
 * @openapi
 * /server/ping:
 *   get:
 *     summary: Verifica se o servidor está online
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Servidor respondeu com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pong:
 *                   type: boolean
 *                   example: true
 */
router.get("/ping", serverController.pingServerController);

/**
 * @openapi
 * /server:
 *   get:
 *     summary: Retorna informações do servidor
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Informações do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerStatus'
 */
router.get("/", serverController.getServerInfoController);

/**
 * @openapi
 * /server/whitelist:
 *   get:
 *     summary: Lista os jogadores na whitelist
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Lista de jogadores na whitelist
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WhitelistedPlayer'
 */
router.get("/whitelist", serverController.getWhitelistController);

/**
 * @openapi
 * /server/plugins:
 *   get:
 *     summary: Lista os plugins instalados no servidor
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Lista de plugins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 example: "EssentialsX"
 */
router.get("/plugins", serverController.getPluginsController);

/**
 * @openapi
 * /server/ops:
 *   get:
 *     summary: Lista os operadores do servidor
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Lista de ops
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Player'
 */
router.get("/ops", serverController.getOpsController);

/**
 * @openapi
 * /server/scoreboard:
 *   get:
 *     summary: Lista todos os scoreboards do servidor
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Scoreboards do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ScoreboardBase'
 */
router.get("/scoreboard", serverController.getScoreboardController);

/**
 * @openapi
 * /server/advancements:
 *   get:
 *     summary: Lista os advancements do servidor
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Advancements do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 example: "minecraft:story/mine_diamond"
 */
router.get("/advancements", serverController.getAdvancementsController);

/**
 * @openapi
 * /server/scoreboard/{name}:
 *   get:
 *     summary: Retorna um scoreboard específico pelo nome
 *     tags:
 *       - Server
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do scoreboard
 *     responses:
 *       200:
 *         description: Scoreboard retornado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ScoreboardBase'
 *       404:
 *         description: Scoreboard não encontrado
 */
router.get("/scoreboard/:name", serverController.getScoreboardObjectiveController);

/**
 * @openapi
 * /server/exec:
 *   post:
 *     summary: Executa um comando no servidor
 *     tags:
 *       - Server
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [command]
 *             properties:
 *               command:
 *                 type: string
 *                 example: "say Olá Mundo"
 *     responses:
 *       200:
 *         description: Comando executado com sucesso
 */
router.post("/exec", serverController.sendCommandController);

/**
 * @openapi
 * /server/whitelist:
 *   post:
 *     summary: Adiciona um jogador à whitelist
 *     tags:
 *       - Server
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [uuid, name]
 *             properties:
 *               uuid:
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *               name:
 *                 type: string
 *                 example: "Jogador1"
 *     responses:
 *       201:
 *         description: Jogador adicionado à whitelist
 */
router.post("/whitelist", serverController.addToWhitelistController);

/**
 * @openapi
 * /server/ops:
 *   post:
 *     summary: Adiciona um operador ao servidor
 *     tags:
 *       - Server
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - playerUuid
 *             properties:
 *               playerUuid:
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       201:
 *         description: Operador adicionado
 */
router.post("/ops", serverController.addToOpsController);

/**
 * @openapi
 * /server/plugins:
 *   post:
 *     summary: Adiciona um plugin ao servidor
 *     tags:
 *       - Server
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "EssentialsX"
 *     responses:
 *       201:
 *         description: Plugin adicionado
 */
router.post("/plugins", serverController.addPluginController);

/**
 * @openapi
 * /server/whitelist:
 *   delete:
 *     summary: Remove um jogador da whitelist
 *     tags:
 *       - Server
 *     parameters:
 *       - in: query
 *         name: uuid
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Jogador removido da whitelist
 */
router.delete("/whitelist", serverController.removeFromWhitelistController);

/**
 * @openapi
 * /server/ops:
 *   delete:
 *     summary: Remove um operador do servidor
 *     tags:
 *       - Server
 *     parameters:
 *       - in: query
 *         name: playerUuid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Operador removido
 */
router.delete("/ops", serverController.removeOpController);

export default router;