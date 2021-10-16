//relembrando função literal
function teste (){
    let nome = "Marcelo"
    return nome // para que a resposta seja utilizada
}

console.log(teste())

// arrow function
// let mensagem = () => {
//     alert("função arrow em arquivo separado")
// }
// mensagem()

// função auto executável
// (function(){
//     alert("auto function")
// })()

// (function(produto, preco){
//     alert("Produto: " + produto + "; Preço: R$ " + preco)
// })("Biscoito" , 2.25)

let v1 = prompt("Digite valor: ")
let v2 = prompt("Segundo valor: ")

var soma = (valor1, valor2)=>{
    let resultado = Number(valor1) + Number(valor2) ;
    console.log(resultado)
}
soma(v1,v2)
//parseFloat para número decimal apenas
//parseInt para número inteiro apenas
//Number analisa e utiliza o mais adequado




