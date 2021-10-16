// Manipulação de Strings
let nome = "Marcelo da Silva e Souza"

// match() Fornece um array com as informações de ocorrencia
console.log(nome.match("S"))

// search() Mostra o indice de ocorrência do elemento
console.log(nome.search("S"))
// valor -1 ocorre quando não existe

//expressões
// g = Todas as ocorrencias
// i = não case-sensitive
// m = fornecer mua string no final
console.log(nome.search(/s/gi))

// replace() substituição do texto
nome = "Marcelo da Silva e Souza"

let nomeP=nome.replace('S', 'P') // na primeira ocorrência
console.log(nomeP)

let nomePP=nome.replace(/s/gi,'P') // global com não case
console.log(nomePP)

//localeCompare Compara a existencia da string
let gato = "Gato"
let outrogato = "Gato"
console.log(gato.localeCompare(outrogato)) // retorna zero se iguais
console.log(gato.localeCompare(/GATO/gi))  // retorna um pois existe mas em outra formatação

//toString() converte um valor em string
let num = Number('10') // é um número
console.log(num.toString()) // imprimiu uma string

//toLowerCase converte o texto em letras minúscula
//toUpperCase converte o texto em letras maiuscula
console.log(gato)
console.log(gato.toLowerCase())
console.log(gato.toUpperCase())

let cat1 = gato.toLowerCase()
let cat2 = outrogato.toLowerCase()
console.log(cat1.localeCompare(cat2)) // retorna zero pois foram formatadas antes
console.log(gato.toLowerCase().localeCompare(outrogato.toLowerCase()))

// trim() retira os espaços no final
let str = "   Uma frase    com espaços       "
console.log(str)
console.log(str.trim())

// NaN é diminutivo de não é um número
gatonum = Number(gato) // retorna NaN pois gato não é número
console.log(gatonum)

//isNaN é um função que testa se a var é um NaN
console.log(`isNaN é ${isNaN(gatonum)} para ${gatonum}`)
console.log(`isNaN é ${isNaN(gato)} para ${gato}`)
console.log(`isNaN é ${isNaN(num)} para ${num}`)

//isNaN é útil como teste lógico.

//toFixed() arredonda o número para cima
let valor = 2.455
console.log(valor.toFixed(2))

//toLocaleString formata a representação de decimal.
console.log(valor.toLocaleString('pt-br'))
console.log(valor.toLocaleString('pt-br',{style: 'currency',currency:'BRL'}))
