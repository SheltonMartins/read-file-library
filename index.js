//import chalk from 'chalk';
import fs from 'fs'
//console.log(chalk.blue('olá mundo'));

const texto = '2708-noSão geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).de-lib-md-aula-1/arquivos/texto.md'

function extraiLinks(texto){

    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    const capturas = [...texto.matchAll(regex)]

    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))

    return resultados !==0 ? resultados : 'não há links no arquivo '
}


function trataErro(erro){
    console.log(erro);
    throw new Error (erro.code, 'não há arquivo no diretorio')
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        
        const encoding = 'utf-8'

        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)

        return extraiLinks(texto)

    }catch(erro){
        trataErro(erro)
    }

}


export default pegaArquivo

