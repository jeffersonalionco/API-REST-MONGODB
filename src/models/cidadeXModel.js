import mongoose from "mongoose"


// Criando schema Cidade-X
const cidadeXschema = new mongoose.Schema({
    idCidade: { type: String, required: true },
    nomeCidade: { type: String, required: true },
    integrantes: [ { idWhatsapp: { type: String, required: true }  }], // Somentes usarios que tem privilegios de estarem no grupo o tempo todo
    rankCidade: [
        {
            idWhatsapp: {type: String, required: true}, // Id do usuario do whatsapp
            pontos: {type: Number, required: true} // Usuario ganha pontos conforme as atividades, feita na cidade.
        }
    ]
    
})

const cidadex = mongoose.model('cidadeX', cidadeXschema)

export default cidadex; // exportando o schema
