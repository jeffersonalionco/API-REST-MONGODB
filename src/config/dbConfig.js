import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Chamando variaveis de ambientes
dotenv.config();


// Função para conexão do banco de dados 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("🟢 MongoDB conectado com sucesso!")
    }catch(erro){
        console.error("🔴 Erro ao conectar no MongoDB:", erro)
        process.exit(1) // Encerra a aplicação em caso de erro
    }
}

export default connectDB;