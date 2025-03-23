import express from 'express'
import { textToSpeechController } from "../controllers/textToSpeechController.js";

const router = express.Router();

// Rota para gerar e reproduzir um audio
/*
    repare que estou chamando  a função que exportei dos controller, isso ajuda a trabalhar com o codigo.
*/
router.post('/convert', textToSpeechController)

export default router;