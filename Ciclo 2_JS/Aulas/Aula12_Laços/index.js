// Relembrando incrementos
let n = 1;
console.log(n) //1
n++; // incremento 1
console.log(n) //2
n--; // decremento 1
console.log(n) //1

let frutas = ["Melancia", "Uva", "Maçã", "Banana"]

// para ( começar em i=0, 
// enquanto i < tamanho 
// andando de i em i de um em um) {faça}
for (let i=0; i < frutas.length ; i++){
    console.log(frutas[i])
}

console.log(frutas)
//imprimir ao contrário
for (let i=(frutas.length-1); i >= 0 ; i--){
    console.log(frutas[i])
}

//Pulando de 2 em 2
for (let i = 0; i < 10 ; i+=2){
    console.log(i)
}