// chamando os módulos
const express = require('express');
const cors = require('cors');
const {Sequelize} = require('./models');

//Configurando app
const app = express();
app.use(cors());
app.use(express.json());

//reconhecer os models
const models = require('./models');
let cliente = models.Cliente;
let pedido = models.Pedido;
let itempedido = models.ItemPedido;
let servico = models.Servico;

//Criando a porta de acesso
let port = process.env.PORT || 3001;
app.listen(port,(req,res) => {  // pode ser por requisição ou resposta
    console.log('Servidor ativo: http://localhost:3001');
});

//Método get permite o bd seja utilizado de forma direta
//Enviando mensagens ao servidor com send()
app.get('/', function(req,res){
    res.send('Olá, Mundo!');
});

app.get('/Area-clientes', function(req,res){
    res.send('Sejam bem vindo(a) a ServicesTI.');
});

app.get('/Area-servicos',function(req,res){
    res.send('Seja bem vindo a sessão de serviços');
});

app.get('/Area-pedidos',function(req,res){
    res.send('Seja bem vindo a sessão de pedidos');
});

// Criação com create()
//Para serviços - Usar os mesmos nomes disponíveis em Migrations/create-service.js
app.get('/servico01',async(req,res) => {
    await servico.create({
        nome: "HTML/CSS",
        descricao: "Desenvolvimento de Páginas estáticas estilizadas",
        createAt:new Date(),
        updateAt: new Date()
    });
    res.send('O serviço foi criado com sucesso!');
});

app.get('/servico02',async(req,res) => {
    await servico.create({
        nome: "NodeJs",
        descricao: "Desenvolvimento de aplicação back-end",
        createAt:new Date(),
        updateAt: new Date()
    });
    res.send('O serviço foi criado com sucesso!');
});

app.get('/cliente01',async(req,res) => {
    await cliente.create({
        nome : 'João',
        endereco : 'Av. Brasil',
        cidade : 'Maringá',
        uf : 'Pr',
        nascimento : 1990-12-31,
        clienteDesde: new Date(),
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send('Novo cliente cadastrado');
});

app.get('/pedido01', async(req,res) => {
    await pedido.create({
        data : new Date(),
        ClienteId : 1
    });
    res.send('Novo pedido cadastrado.');
});

app.get('/item01', async(req,res) => {
    await itempedido.create({
        PedidoId : 1,
        ServicoId : 1,
        quantidade: 1,
        valor : 400.00
    });
    res.send('O item foi adicionado ao pedido');
});

//requisição externa
//método post permite a inclusão de dados por fonte externa

//Requisição externa executada por comando interno.
app.post('/incluirservico',async(req,res) => {
    await servico.create({
        nome: "Delphi",
        descricao: "Manutenção e Suporte a sistema legados em Delphi"
    })
    res.send('O serviço foi criado com sucesso!')
})

//Requisição via corpo da página
app.post('/novoservico',async(req,res) => {
    await servico.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O serviço foi criado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel conectar ao servidor'
        });
    });
});

app.post('/novocliente',async(req,res) => {
    await cliente.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O Cliente foi cadastrado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel conectar ao servidor'
        });
    });
});

app.post('/novopedido',async(req,res) => {
    await pedido.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O Pedido foi cadastrado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel conectar ao servidor'
        });
    });
});

app.post('/novoitempedido',async(req,res) => {
    await itempedido.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O item foi adicionado ao pedido!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel conectar ao servidor'
        });
    });
});

//Consulta de dados = Model Querying 
//função findAll
app.get('/listaservicosall',async(req,res) => {
    await servico.findAll({
        raw: true
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/listapedidosall',async(req,res) => {
    await pedido.findAll({
        raw: true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

app.get('/listaclientesall',async(req,res) => {
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});

// Busca ordenada (order)
app.get('/listaservicos',async(req,res) => {
    await servico.findAll({
        order: [['nome','ASC']] //ASC=menor -> maior;DESC=maior -> menor
    }).then(function(servicos){
        res.json({servicos})
    });
});

//Numero de itens count
app.get('/numeroservicos', async(req,res)=>{
    await servico.count('id').then(function(servicos){
        res.json(servicos)
    })
})

//buscar um especifico
app.get('/servico/:id', async(req,res)=>{
    await servico.findByPk(req.params.id)
    .then(serv =>{ // exemplo com arrow function
        return res.json({
            error: false,
            serv
        })
    }).catch(function(erro){ //outra forma de escrever a função
        return res.status(400).json({
            error : true,
            message : "Não foi possível conectar"
        })
    })
})

//Atualizações de classes
//alteração estática (save)
app.get('/updateservico01', async(req,res) =>{
    await servico.findByPk(1)
    .then(serv =>{
        serv.nome = "HTML/CSS/JS";
        serv.descricao = "Páginas estáticas e dinâmicas estilizadas"
        serv.save();
        return res.json({serv});
    });
});

//alteração via requisição direta do app
app.put('/updateservico', async(req,res) =>{
    await servico.update(req.body,{
        where:{id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        })
    })
});

//Busca por ID
app.get('/pedidos/:id', async (req,res) => {
    await pedido.findByPk(req.params.id, {
        include:[{
            all:true
        }]
    }).then(ped => {
        return res.json({ped})
    })
})

//Alterar um item usando a busca de pedido por requisição
app.put('/pedido/:id/editaritem', async(req,res)=>{
    const item={
        quantidade: req.body.quantidade,
        valor: req.body.valor
    }

    //ver se o pedido existe
    if(!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'O Pedido não foi encontrado.'
        })
    }

    //ver se o serviço existe
    if(!await servico.findByPk(req.body.ServicoId)){
        return res.status(400).json({
            error: true,
            message: 'O Serviço não foi encontrado.'
        })
    }

    // alterar o item do pedido em um dos serviços
    await itempedido.update(item, {
        //Condições para alteração
        where: 
        Sequelize.and(
            {ServicoId:req.body.ServicoId},
            {PedidoId: req.params.id}
        )
    }).then(function(itens){
        return res.json({
            error: false,
            message: 'Pedido alterado com sucesso',
            itens
        })
    }).catch(function(erro){
        return res.json({
            error: true,
            message: 'Não foi possível alterar o pedido'
        })
    })

})

// Excluir Cliente
// app.get('/excluircliente', async(req,res) => {
//     cliente.destroy({
//         where: {id: 5}
//     })
// })
app.get('/excluircliente/:id', async(req,res) => {
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'O Cliente foi excluído com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível excluir o Cliente!'
        })
    })
})


// Desafio: Incluir no sistemas a compra de equipamentos






















//Exercicios Aula09
//Liste todos os clientes
app.get('/A09E01', async function (req,res){
    await cliente.findAll({
        raw: true
    }).then(clientes =>{
        return res.json({
            message : "Lista dos Clientes",
            clientes
        })
    })
})

//Liste todos os clientes por tempo de cadastro
app.get('/A09E02', async function (req,res){
    await cliente.findAll({
        order: [['createdAt','DESC']] //ASC=menor -> maior;DESC=maior -> menor
    }).then(clientes =>{
        return res.json({
            message : "Lista dos Clientes por tempo de cadastro",
            clientes
        })
    })
})

//Liste todos os pedidos
app.get('/A09E03', async function (req,res){
    await pedido.findAll({
        raw: true
    }).then(pedidos =>{
        return res.json({
            message : "Lista dos Pedidos",
            pedidos
        })
    })
})

//Busque o número de clientes no banco de dados
app.get('/A09E05', async function (req,res){
    await cliente.count('id')
    .then(numeroclientes =>{
        return res.json({
            message : "Número de Clientes",
            numeroclientes
        })
    })
})

//Busque o número de pedidos no banco de dados
app.get('/A09E06', async function (req,res){
    await pedido.count('id')
    .then(numeropedidos =>{
        return res.json({
            message : "Número de Pedidos",
            numeropedidos
        })
    })
})


//DUVIDAS
// Aula 09 - Visualize o pedido por ordem de valor
// Exercícios Aula 12 - Localizar os serviços do Cliente