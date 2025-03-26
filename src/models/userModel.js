import mongoose from "mongoose";

// Criando esquema para tabela usuario
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    nivel:{type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String ,required: true},
    sexo: {type: String, required: true},
    telefone: {type: String, required: true},
    idWhatsapp: {type: String, required: true},
    inventarios: [{type: mongoose.Schema.Types.ObjectId, ref: 'Inventario'}] // estou criando um Invetario com o id do usuario
}, {timestamps: true});


const User = mongoose.model('User', userSchema);

export default User;