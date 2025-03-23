import { convertTextToSpeech } from "../services/textToSpeechService.js";


// Vamos criar uma função para o controle do serviço REPRODUZIR audio que encontra--se em ../services/textToSpeechService.js
export const textToSpeechController = async (req, res)=> {

const { text } = req.body;

if (!text) {
    // retorno este erro se a requisição nao conter nenhum texto 
    return res.status(400).json({error: 'É necessario um texto para reproduzir'});
}


try{
    await convertTextToSpeech(text);
    res.status(200).send('Audio gerado e reproduzido com sucesso');
}catch(error){
    res.status(500).json({error: 'Erro ao gerar o audio'})
}

}