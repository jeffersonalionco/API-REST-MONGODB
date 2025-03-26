import express from 'express'
import { createUser, deleteUser, updateUser , userQuery} from '../controllers/userController.js'

const router = express.Router();
// Rota para registar um usuario no banco
router.post('/register', createUser)
// Rota para excluir um usuario pelo email
router.post('/deletar', deleteUser);
// Rota para editar dados do usuario
router.post('/editar', updateUser)
// Rota para buscar dados do usuario no banco de dados
router.post('/userQuery', userQuery)

export default router;