import express from 'express';
import { createInventary } from "../controllers/inventoryController.js";

const router = express.Router();

// Rota para criar inventario e associar ao usuario
router.post('/createInventary', createInventary)


export default router;