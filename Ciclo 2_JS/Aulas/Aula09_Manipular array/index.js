// concat() = une arrays
let nomeFeminino = [ "Maria", "Ana", "Letícia"]
let nomeMasculino = [ "Pedro", "Karlos", "João"]
let todos = nomeFeminino.concat(nomeMasculino)
console.log(todos)

// todos = ['Maria', 'Ana', 'Letícia', 'Pedro', 'Karlos', 'João']
//              0     1         2        3         4         5


// indexOf() localiza a posição de um elemento
console.log(todos.indexOf("Pedro")) // 3
console.log(todos.indexOf("Cleverton")) // retorna -1 quando não existe

// Exemplo de uso: testar se um item esta na lista
// let usuario = prompt("Nome")
// if (todos.indexOf(usuario) == -1){
//     alert(`O nome ${usuario} não está na lista`)
// } else {
//     alert(`O nome ${usuario} esta na posição ${todos.indexOf(usuario)} da lista`)
// }

// join() converte o array em uma lista tipo string (com virgulas)
console.log(nomeMasculino)
console.log(nomeMasculino.join()) // Pedro,Karlos,João

//push() insere um elemento no final do array
let frutas = [] // array vazio
frutas.push("maçã")
console.log(frutas)
frutas.push("laranja")
console.log(frutas)

function listaFrutas (novaFruta){
    if (frutas.indexOf(novaFruta) == -1){
        console.log(`Fruta ${novaFruta} foi acrescentada a lista ${frutas.join()}`)
        frutas.push(novaFruta)
    } else {
        console.log(`Fruta ${novaFruta} já esta na lista.`)
    }
}
listaFrutas("banana")
listaFrutas("laranja")

//pop() remove o último elemento da lista
//shift() remove o primeiro elemento da lista
frutas = ["banana", "maçã", "laranja", "pêra", "uva"]
console.log(frutas)
frutas.pop() // remove uva
console.log(frutas)
frutas.shift() // remove banana
console.log(frutas)


//sort() ordena a lista
//reverse() inverte a ordem da lista
console.log(todos)
console.log(todos.sort())
console.log(todos.reverse())
//o sort() ordena por ordem de caractere ( 1, 100 , 2)

//toString() converte o array em uma string
console.log(frutas.toString()) // similar ao join

//slice() cria uma lista nova usando a original
todos = ['Maria', 'Ana', 'Letícia', 'Pedro', 'Karlos', 'João']
let grupo1=todos.slice(0,3)   // começando do 0 até o 3 (elem 0 1 2)
let grupo2=todos.slice(3,6)   // começando do 3 até o 6 (elem 3 4 5)
console.log(todos)
console.log(grupo1)
console.log(grupo2)

//splice() cria uma lista nova dividindo a original
let indice = todos.indexOf("Pedro")
let novaLista = todos.splice(indice,2) //criar array com o item da lista e os próximos até ter 1 item
console.log(todos)
console.log(novaLista)
