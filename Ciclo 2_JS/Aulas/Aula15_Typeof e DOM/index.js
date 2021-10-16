// typeOf

let s = "palavra"
let b = true
let n = 15
let f = 1.5
let ns = '15'
console.log(`A variável ${s} é do tipo ${typeof(s)}`)
console.log(`A variável ${n} é do tipo ${typeof(n)}`)
console.log(`A variável ${b} é do tipo ${typeof(b)}`)
console.log(`A variável ${f} é do tipo ${typeof(f)}`)
console.log(`A variável '${ns}' é do tipo ${typeof(ns)}`)
// o conteúdo retornado é uma string
console.log(`O retorno de typeof é do tipo ${typeof(typeof(n))}`)

//Para comparar os tipos de variáveis
if (typeof(n) === 'number'){
    console.log("A var é um number")
} else {
    console.log("A var é um number")
}


// Manipulando DOM
window.onload = function(){ //ao carregar
    const botao = document.getElementById('btn');
    const txtBox = document.querySelector("#txtBox");
    const caixa = document.querySelector("#caixa")
    

    botao.addEventListener('click',function(){
        caixa.innerHTML += " " + txtBox.value;
    })

}
