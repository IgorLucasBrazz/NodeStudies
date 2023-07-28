import chalk from "chalk";
import pegaArquivo from "./index.js";
import fs from 'fs';


const caminho = process.argv;

function imprimeLista(resultado, identificador = '' ){
    console.log(
        chalk.yellow('lista de links'),
        chalk.black.bgGreen(identificador),
        resultado);
}

async function processaTexto(argumentos){
    const caminho = argumentos[2];

    try{
        fs.lstatSync(caminho);
    }catch(erro){
        console.log(chalk.red('arquivo ou dirtorio não existe!!!'));
        return;
    }

    if (fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado);
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async(nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(lista, nomeDeArquivo);
        })
    }
}

processaTexto(caminho);