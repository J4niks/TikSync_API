import { Router } from "express";
import * as worldController from "../controllers/world.controller";

const router = Router();



/**
 * @openapi
 * /world/{id}/download:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Baixa a pasta do mundo pelo ID
 *     tags:
 *       - World
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do mundo
 *     responses:
 *       200:
 *         description: Download iniciado
 *       404:
 *         description: Mundo não encontrado
 */
router.get("/:id/download", worldController.getWorldFolderByWorldIdController);

/**
 * @openapi
 * /world/download:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Baixa as pastas de todos os mundos
 *     tags:
 *       - World
 *     responses:
 *       200:
 *         description: Download iniciado para todos os mundos
 */
router.get("/download", worldController.getAllWorldFoldersController);

/**
 * @openapi
 * /world/save:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Salva um novo mundo
 *     tags:
 *       - World
 *     responses:
 *       201:
 *         description: Mundo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/World'
 */
router.post("/save", worldController.saveWorldController);

/**
 * @openapi
 * /world/{id}/save:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Salva alterações em um mundo existente
 *     tags:
 *       - World
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do mundo
 *     responses:
 *       200:
 *         description: Mundo atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/World'
 *       404:
 *         description: Mundo não encontrado
 */
router.post("/:id/save", worldController.saveWorldByIdController);

/**
 * @openapi
 * /world:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lista todos os mundos
 *     tags:
 *       - World
 *     responses:
 *       200:
 *         description: Lista de mundos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/World'
 */
router.get("/", worldController.getWorldsController);

/**
 * @openapi
 * /world/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retorna um mundo específico pelo ID
 *     tags:
 *       - World
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do mundo
 *     responses:
 *       200:
 *         description: Mundo retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/World'
 *       404:
 *         description: Mundo não encontrado
 */
router.get("/:id", worldController.getWorldByIdController);

export default router;
