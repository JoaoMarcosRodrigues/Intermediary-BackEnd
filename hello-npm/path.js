import { basename, dirname } from "path";

let nomeArquivo = basename('./teste.txt');
let fileName = basename('/teste/something');

let dirName = dirname('/teste/something')
let diretorio = dirname('/teste/something/file.txt')

console.log('nome do arquivo: '+nomeArquivo);
console.log('fileName: '+fileName);
console.log('dirName: '+dirName);
console.log('diretorio: '+diretorio);
