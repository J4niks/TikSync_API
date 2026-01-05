import { Router } from 'express';
import { startLive, stopLive } from './live.controller';
import { swaggerUi, swaggerSpec } from '../docs/swagger'; // já existente no seu projeto

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Live
 *   description: Endpoints para gerenciar TikTok Live
 */

/**
 * @swagger
 * /live/start:
 *   post:
 *     summary: Inicia a conexão com a Live do TikTok
 *     tags: [Live]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nome de usuário do TikTok
 *                 example: catherine.277
 *     responses:
 *       200:
 *         description: Conexão iniciada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: connected
 *                 username:
 *                   type: string
 *                   example: catherine.277
 *       400:
 *         description: Erro ao conectar a Live
 */
router.post('/start', startLive);

/**
 * @swagger
 * /live/stop:
 *   post:
 *     summary: Encerra a conexão com a Live do TikTok
 *     tags: [Live]
 *     responses:
 *       200:
 *         description: Conexão encerrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: disconnected
 */
router.post('/stop', stopLive);

export default router;