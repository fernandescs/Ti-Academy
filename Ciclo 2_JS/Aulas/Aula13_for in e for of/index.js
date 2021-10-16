// Relembrando for
var x=1
for ( x; x <= 5; x++ ){
    console.log(`O valor de x é ${x}`)
}


//for in <= Objetos
let Pessoas = {
    nome:'Jose Pedro',
    idade: 90,
    heroi: 'Capitão América'
}
console.log(Pessoas)
for (let propriedade in Pessoas){
    console.log(propriedade)
}
//Fornece as propriedades nome idade e heroi

for (let dado in Pessoas){
    console.log(Pessoas[dado])
}
// Fornece os dados das propriedades


// for of <= Arrays
let frutas = [ "Melacia", "Uva", "Banana"]
console.log(frutas)

// para cada um dos nomes em frutas:
for (let nome of frutas) {
    console.log(nome)
}

let Herois = [
    {
        nome : "Steve",
        codinome: 'Capitão América',
    },
    {
        nome: "Clark",
        codinome: "Super-man"
    },
    {
        nome: "Tony",
        codinome: "Homem de Ferro"
    }
]

Herois.push({
    nome: "Diana",
    codinome: "Mulher-Maravilha"
})

console.log(Herois)
for (let supers of Herois){
    console.log(supers) // retorna nome/codinome
    for (let i in supers){
        console.log(supers[i])
    }
}
