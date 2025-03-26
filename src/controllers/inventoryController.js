import Inventario from "../models/inventoryModel.js";
import User from "../models/userModel.js";
import mongoose from 'mongoose';


//Criar inventário
export const createInventary = async (req, res) => {
    try {
        const { usuarioId, items } = req.body;

        // Verificando se o usuário existe no banco
        const user = await User.findOne({ idWhatsapp: usuarioId });
        if (!user) {
            return res.status(400).json({ error: "Usuário não encontrado no sistema" });
        }

        // Criar novo inventário e associar ao usuário
        const newInventory = new Inventario({ usuarioId: user._id, items: items });

        // Salvando o novo inventário no banco
        await newInventory.save();

        // Atribuindo o id do inventário ao usuário (associando o inventário ao usuário)
        user.inventarios.push(newInventory._id);
        await user.save();  // Salvando o usuário atualizado com o novo inventário

        // Respondendo que o inventário foi criado com sucesso
        res.status(201).json({
            message: "Inventário criado e vinculado ao usuário com sucesso",
            inventarioId: newInventory._id,
            usuarioId: user._id
        });
    } catch (error) {
        console.error(error);  // Registrando o erro no console para debugging
        res.status(400).json({ errorr: "Erro ao criar inventário", error });
    }
};


// Post para buscar dados do invetario

export const searchInventary = async (req, res) => {
    try {
        const { idWhatsapp } = req.body;

        if (!idWhatsapp) {
            return res.status(400).json({ error: "O campo 'idWhatsapp' precisa estar preenchido " })
        }

        // Buscando dados do usuario 
        const user = await User.findOne({ idWhatsapp: idWhatsapp })

        if (!user) {
            return res.status(400).json({ error: "Usuario não existe no sistema" })
        }

        // Buscando dados do inventario, pelo id do usuario
        const inventario = await Inventario.findOne({ usuarioId: user._id })

        if (!inventario) {
            return res.status(400).json({ error: "Não existe inventario para este usuario" })
        }

        res.status(200).json({ inventario })

    } catch (errorr) {
        res.status(400).json({ error: "Erro ao buscar dados so inventario", errorr })
    }
}


// Rota para atualizar dados do inventario do usuario
export const updateItemInventary = async (req, res) => {
    const { idWhatsapp, idItem } = req.params
    const dados = req.body

    try {

        const user = await User.findOne({ idWhatsapp: idWhatsapp })
        if (!user) return res.status(400).send("Usuario nao existe no banco de dados")

        const inventario = await Inventario.findOne({ usuarioId: user._id })
        if (!inventario) return res.status(400).send("Não existe inventario para este usuario.")

        // Encontrando item dentro do inventario do usuario
        const item = inventario.items.find(item => item.idItem === idItem)

        // Atualizando dados commo foi enviado no escopo da requisição
        Object.assign(item, dados) // apenas os campos informado serão alterados


        // Salvar mudanças no item
        await inventario.save()

        res.status(200).json({ message: "Alterações salvas com sucesso", data: item })

    } catch (errorr) {
        return res.status(400).json({ error: "Erro ao atualizar os dados do item", errorr })
    }


}


// Criar rota para adicionar um item no inventario
export const addItemInventary = async (req, res) => {
    try {
        const data = req.body // pegando informações da requisição
        const idWhatsapp = data.idWhatsapp; // ID necessario para encontrar um usuario 
        const user = await User.findOne({idWhatsapp: idWhatsapp}) // Encontrando usuario dentro do banco mongoDB
       
        if(!user) return res.status(400).json({message: "Usuario não cadastrado no sistema"}) // Retorna isso, se o usuario nao estiver cadastrado no banco

        const inventario = await Inventario.findOneAndUpdate(
            {usuarioId: user._id}, 
            {$push : {items: data.item }}, // Adiciona os dados recebidos em item, em um novo item
            { new: true, upsert: true } // `new: true` retorna atualizado, `upsert: true` cria se não existir
        )

        res.status(200).json({message: "Item adicionado com sucesso", item: data.item}) // resposta para o usuario
        
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({error})
    }
}
