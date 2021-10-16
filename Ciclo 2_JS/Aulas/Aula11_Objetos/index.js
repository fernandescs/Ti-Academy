// Criar um objeto
// function Pessoa (nome){
//     this.nome = nome
//     this.msg = function(){
//         alert(`Olá ${nome}`)
//     }
// }

// let NovaPessoa = new Pessoa("Jose")
// console.log(NovaPessoa.nome)
// NovaPessoa.msg()
// let OutraPessoa = new Pessoa("Maria")
// console.log(OutraPessoa.nome)
// OutraPessoa.msg()
//Assim dois objetos foram criados e vão ocupar espaço na memória.

// A melhor forma de declarar é adicionando os prototypes a medida que são necessários
// function Pessoa (nome){
//     this.nome = nome
// }

// Pessoa.prototype.msg = function(){
//     alert(`Olá ${this.nome}`)
// }

// let NovaPessoa = new Pessoa("Jose")
// let OutraPessoa = new Pessoa("Maria")

// console.log(NovaPessoa.nome)
// NovaPessoa.msg()
// console.log(OutraPessoa.nome)
// OutraPessoa.msg()

// Uma outra forma de criar Objetos e preencher é
// let Pessoa = {
//     'nome': '',
//     'idade': ''
// }

// Pessoa.__proto__.msg = function(){
//         alert(`Olá ${this.nome}`)
//     }

// let P = Pessoa
// console.log(P)

// P.nome = "Jose"
// console.log(P)
// P.msg()

let Pessoa = [
    {
        'nome' : 'Marcelo',
        'idade' : 36,
        'Sexo' : 'M'
    },
    {
        'nome' : 'Suelem',
        'idade' : 36,
        'Sexo' : 'F'
    },
]

let Cadastro = Pessoa
console.log(Cadastro[0].nome)

console.log(`Existem ${Cadastro.length} pessoas cadastradas`)