import User from "../models/userModel.js";


// Criar um usuário no banco
export const createUser = async (req, res) => {
    try {
        const { name, username, nivel, email, password, sexo, telefone, idWhatsapp} = req.body;

        // Cria um novo usuário
        const newUser = new User({ name, username, nivel, email, password, sexo, telefone, idWhatsapp});
        await newUser.save();

        // Retorna sucesso
        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        // Retorna erro em caso de falha
        res.status(400).json({ error: "Erro ao criar usuário", details: error.message });
    }
};


// Função para editar um usuario
export const deleteUser = async (req, res) => {

    try{
        // Pegar E-mail do usario para deletar.
        const { email }  = req.body;

        if(!email){
            return res.status(400).json({error: "Necessario informar um email"})
        }
        const user = await User.findOneAndDelete({ email })
        res.status(200).send("Usuario deletado com sucesso")

        if(!user){
            return res.status(400).json({error: "Usuario não cadastrado"})
        }


    }catch(error){
        res.status(500).json({error: "Erro ao deletar o usuario"})
    }

}

// Função para editar usuario dentro do banco
export const updateUser = async (req, res) => {
    try {
        const { idWhatsapp, dados } = req.body;

        if (!idWhatsapp) {
            return res.status(400).json({ error: "O campo 'idWhatsapp' precisa estar informado" });
        }

        // Verifica se há campos para atualizar
        if (Object.keys(dados).length === 0) {
            return res.status(400).json({ error: "Nenhum campo para atualizar foi enviado" });
        }

        // Busca e atualiza o usuário dinamicamente
        const user = await User.findOneAndUpdate(
            { idWhatsapp },
            { $set: dados },
            { new: true } // Retorna o usuário atualizado
        );

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado no banco de dados" });
        }

        res.status(200).json({
            message: "Usuário atualizado com sucesso",
            user
        });

    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        res.status(500).json({ error: "Erro interno no servidor ao atualizar dados do usuário" });
    }
}



// Criar função que buscará dados do usuário no banco de dados
export const userQuery = async (req, res) => {
    try {
        // Necessário passar o idWhatsapp do usuário para buscar no banco
        const { idWhatsapp } = req.body;

        if (!idWhatsapp) {
            return res.status(400).json({ error: "O campo 'idWhatsapp' precisa estar informado" });
        }

        // Buscando o usuário no banco pelo idWHatsapp
        const user = await User.findOne({ idWhatsapp: idWhatsapp });

        
        if (!user) {
            return res.status(200).json({ message: "Usuário não encontrado", user: null });
        }

        // Retornando dados para a chamada da API
        res.status(200).json({user});

    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).json({ error: "Erro interno no servidor ao buscar dados do usuário" });
    }
};