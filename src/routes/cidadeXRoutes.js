import express from 'express'
import { createCidadeX  } from '../controllers/cidadeXController.js'; // importando função do controller para usar quandoa  rota for chamada

// Importando função de rotas do express para lidar com tabela X
 const router = express.Router() 

 router.post('/createCidadeX', createCidadeX)



 export default router;
