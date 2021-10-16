import {dadosCEP} from './functions.js'

const entrada = document.querySelector("#cep");
const botao = document.querySelector("#buscar")

botao.addEventListener('click', function(){
    dadosCEP(entrada.value)
})