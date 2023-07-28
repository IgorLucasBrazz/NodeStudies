//const chalk = require('chalk')
import fs from 'fs'
import chalk from 'chalk';

// 

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    const capturas = [...texto.matchAll(regex)];//expande o conteudo dentro de um array
    const result = capturas.map(captura =>({[captura[1]]: [captura[2]]}));
    return result.length !== 0 ? result : 'Não há links no arquivo!!!';
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretorio'));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    }
    catch(erro){
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('operação concluída!'));
      }
    
}

export default pegaArquivo
//pegaArquivo('./arquivos/');




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

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
