// Formas de declarar strings
    let str1 = `Texto1`;
    let str2 = "Texto2";

// Templates para concatenar strings
    let frase1 = "Outra string contendo o ${str1}";
    let frase2 = "Outra string contendo o " + str1;
    let frase3 = `Outra string contendo o ${str1}`;
    let frase4 = `Outra string contendo o ${str2}`;
    console.log(frase1)
    console.log(frase2)
    console.log(frase3)
    console.log(frase4)

// Arrays: um conjunto de dados
               // 0  ,  1     ,  2      ,   3
const frutas = ["uva","banana","laranja", "maçã"]

//selecionando itens no array
console.log(frutas[2]) // laranja
console.log(`vou comprar ${frutas[3]}`) // frase com item do array

console.log(frutas) // informa o conteúdo do array

// arrays podem ser mistos
const Pessoa = [
    "José", // 0
    23,     // 1
    "Solteiro", // 2
    "Bola", // 3
    1.70,  // 4
    cores = ["azul", "vermelho", "preto"] //5
  ];

  (function(p){
      const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou 
      ${Pessoa[2]} eu também gosto de jogar ${Pessoa[3]}. Minha altura é de ${Pessoa[4]}`;
      document.write(jose);
  })(Pessoa)

console.log(Pessoa)
console.log(Pessoa[5])
console.log(Pessoa[5][2]) // array bidimensional

console.log(Pessoa.length) // Tamanho do array Pessoa 
console.log(Pessoa[5].length) // tamanho do array cores
console.log(`a var ${str1} tem ${str1.length} letras e começa com ${str1[0]}`)
// strings são criadas como arrays de caracteres
