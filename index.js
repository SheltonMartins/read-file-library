import chalk from 'chalk';
import fs from 'fs'

function extraiLinks(texto){

    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    const capturas = [...texto.matchAll(regex)]

    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))

    return resultados !==0 ? resultados : 'não há links no arquivo'
}


function trataErro(erro){
    console.log(erro);
    throw new Error (erro.code, 'não há arquivo no diretorio')
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        
        const encoding = 'utf-8'

        console.log(caminhoDoArquivo)

        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)

        return extraiLinks(texto)

    }catch(erro){
        trataErro(erro)
    }

}


export default pegaArquivo

