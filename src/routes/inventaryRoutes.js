import express from 'express';
import { createInventary, searchInventary, updateItemInventary} from "../controllers/inventoryController.js";

const router = express.Router();

// Rota para criar inventario e associar ao usuario
router.post('/createInventary', createInventary);
// Rota para buscar dados do inventario do usuario pelo id do whatsapp
router.post('/searchInventary', searchInventary);
// Rota para atualizar itens dentro do inventario
router.patch('/updateItemInvetary/:idWhatsapp/item/:idItem', updateItemInventary)


export default router;