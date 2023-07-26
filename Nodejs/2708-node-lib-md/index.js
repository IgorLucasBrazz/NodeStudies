//const chalk = require('chalk')
import fs from 'fs'
import chalk from 'chalk';


function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretorio'));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));
    }
    catch(erro){
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('operação concluída!'));
      }
    
}

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');



//Promises
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto))) //callback (texto) e chamaremos uma arrow function, passando um console.log
//         .catch(trataErro)
// }

//Sincrona
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })

// }
