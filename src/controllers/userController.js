import User from "../models/userModel.js";


// Criar um usuário no banco
export const createUser = async (req, res) => {
    try {
        const { name, email, password, sexo, telefone, idWhatsapp} = req.body;
        
        // Verifica se o usuário já existe no banco
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // Se já existir um usuário com o mesmo e-mail, retorna erro 409
            return res.status(409).json({
                status: 409,
                message: "O usuário com esse e-mail já existe."
            });
        }

        // Cria um novo usuário
        const newUser = new User({ name, email, password, sexo, telefone, idWhatsapp});
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
export const updateUserByEmail = async (req, res) => {
    try {
        const { email, name, newEmail, password, sexo, telefone } = req.body

        if (!email) {
            return res.status(400).json({ error: "O campo 'email' precisa estar informado" })
        }

        // Encontrar usuário pelo email
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }

        let updateData = { name, password, sexo, telefone }
        // Se houver nova senha, criptografa antes de salvar
        /** 
        
        if (password) {
            const salt = await bcrypt.genSalt(10)
            updateData.password = await bcrypt.hash(password, salt)
        }
        */
        

        // Se houver novo email, verifica se já existe
        if (newEmail) {
            const emailExists = await User.findOne({ email: newEmail })
            if (emailExists) {
                return res.status(400).json({ error: "O novo email já está em uso" })
            }
            updateData.email = newEmail
        }

        // Atualiza o usuário
        user = await User.findOneAndUpdate({ email }, updateData, { new: true })

        res.json({ message: "Usuário editado com sucesso", user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



// Criar função que buscará dados do usuário no banco de dados
export const userQuery = async (req, res) => {
    try {
        // Necessário passar o email do usuário para buscar no banco
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: "O campo 'email' precisa estar informado" });
        }

        // Buscando o usuário no banco pelo email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: `Email ${email} não encontrado no banco de dados` });
        }

        // Retornando dados para a chamada da API
        res.status(200).json({
            message: "Busca realizada com sucesso",
            name: user.name,
            email: user.email,
            sexo: user.sexo,
            telefone: user.telefone
        });

    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).json({ error: "Erro interno no servidor ao buscar dados do usuário" });
    }
};