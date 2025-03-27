import express from 'express'
import textToSpeechRoutes from './routes/textToSpeechRoutes.js'
import connectDB from './config/dbConfig.js';
import userRoutes from './routes/userRoutes.js'
import inventaryRoutes from './routes/inventaryRoutes.js'
import createCidadeX from './routes/cidadeXRoutes.js' 

const PORT = process.env.PORT;

const app = express();

// Chamar conexão com o banco mongoDB
connectDB();


// Middleware para parse de json 
app.use(express.json());

// Roteamento da API
app.use('/api/text-to-speech', textToSpeechRoutes);

// rota para adicionar usuario
app.use('/api/users', userRoutes);

// rota para lidar com o inventario
app.use('/api/inventory', inventaryRoutes)

// rota para lidar com dados da tabela cidadex
app.use('/api/cidadex', createCidadeX)


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em https://localhost:${PORT}`)
})