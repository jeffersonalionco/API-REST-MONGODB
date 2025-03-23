import textToSpeech from '@google-cloud/text-to-speech';
import { promises as fs } from 'fs';

// Importando a biblioteca de reprodução de audio 
import playSound from 'play-sound'

// Caminho para a chave JSON (verifique se o arquivo está no mesmo diretório)
const keyFile = './text-speech.json';

// Criar cliente autenticado
const client = new textToSpeech.TextToSpeechClient({ keyFilename: keyFile });

async function convertTextToSpeech(text) {

  // Modelo de requisição para o google text To Speech 
    const request = {
      "audioConfig": {
        "audioEncoding": "LINEAR16",
        "effectsProfileId": [
          "telephony-class-application"
        ],
        "pitch": 0,
        "speakingRate": 1
      },
      "input": {
        "text": text,
      },
      "voice": {
        "languageCode": "pt-BR",
        "name": "pt-BR-Chirp3-HD-Kore"
      }
    };


    
    try {
        const [response] = await client.synthesizeSpeech(request);
        await fs.writeFile('saida.wav', response.audioContent);
        console.log('✅ Áudio gerado com sucesso! Arquivo: saida.mp3');
        reproduzir('saida.wav')
    } catch (error) {
        console.error('❌ Erro ao gerar o áudio:', error);
    }
}



// Função para reproduzir o audio depois de ser gerado pelo google
async function reproduzir(caminho) {
    const player = playSound()

    player.play(caminho, function(err){
        if(err){
            console.log('Erro na reprodução do audio')
        }else{
            console.log('Audio reproduzido')

            // aqui removemos o audio após ser reproduzido
            fs.unlink('saida.wav');
        }
    })
}




// Exportando a funçãoo de reprodução de audio 

export {convertTextToSpeech};