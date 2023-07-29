//import chalk from 'chalk';
import fs from 'fs'
//console.log(chalk.blue('olá mundo'));



function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) =>{

        console.log(texto)

    })

}

pegaArquivo('./arquivos/texto.md')

