import chalk from 'chalk';
import pegaArquivo from "./index.js";
import fs, { lstat } from 'fs';
import listaLinks from './http-validacao.js';

const caminho = process.argv;

async function exibeResultado(caminho){
    
    const resultado = await pegaArquivo(caminho)

    //console.log('links: ', resultado)

    console.log(await listaLinks(resultado))

}

async function processaTexto(argumentos) {

    const caminho = argumentos[2]

    try{

        fs.lstatSync(caminho)

    }catch(erro){

        if(erro.code === 'ENOENT'){

            console.log('arquivo ou diretorio nao existe.')

        }

    }

    if (fs.lstatSync(caminho).isFile()) {

        exibeResultado(caminho)

    } else if (fs.lstatSync(caminho).isDirectory()) {

        const arquivos = await fs.promises.readdir(caminho)

        arquivos.forEach(async (nomeDeArquivo) => {

            exibeResultado(`${caminho}/${nomeDeArquivo}`)

        })
    }else{
        console.log('opacao invalida')
        return
    }
}

processaTexto(caminho)