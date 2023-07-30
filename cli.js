import pegaArquivo from "./index.js";
import fs from 'fs'

const caminho = process.argv;

async function exibeResultado(caminho){
    
    const resultado = await pegaArquivo(caminho)

    console.log('links: ', resultado)

}

async function processaTexto(argumentos) {

    const caminho = argumentos[2]

    if (fs.lstatSync(caminho).isFile()) {

        exibeResultado(caminho)

    } else if (fs.lstatSync(caminho).isDirectory()) {

        const arquivos = await fs.promises.readdir(caminho)

        arquivos.forEach(async (nomeDeArquivo) => {

            exibeResultado(`${caminho}/${nomeDeArquivo}`)

        })
    }
}

processaTexto(caminho)