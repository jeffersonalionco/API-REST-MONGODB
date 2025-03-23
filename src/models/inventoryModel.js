import mongoose from "mongoose";


// criando esquema de um item dentro do inventario
const itemSchema = new mongoose.Schema({
    nomeItem: {type: String, required: true},
    quantidade: { type: Number, required: true}
})


const inventorySchema = new mongoose.Schema({
    usuarioId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    items: [itemSchema]
})


const Inventario = mongoose.model('Inventario', inventorySchema)

export default Inventario;