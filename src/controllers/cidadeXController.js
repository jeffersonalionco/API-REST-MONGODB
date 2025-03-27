import cidadex from "../models/cidadeXModel.js"; //  Importando o schema da cidadeX

// Criando rota para criar a tabela cidade X
export const createCidadeX = async (req, res) => {
    try {
        const data = req.body // Pegando informações do usuario
        const consultaCidadex = await cidadex.find() // consulta se a cidade x existe
        if(consultaCidadex) return res.status(400).json({message: "Cidade já existe.", data: consultaCidadex})

        const cidade =  new cidadex(data) // criando esquema igualmente 
        
        await cidade.save(); // salvando dentro do banco..

        res.status(200).json({ essage: 'Tabela cidade X criada.'}) // Resposta da solicitação 

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Erro ao Criar dados da cidade X", error})
    }
}