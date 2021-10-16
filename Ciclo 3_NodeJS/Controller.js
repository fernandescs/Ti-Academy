// chamando os módulos
const express = require('express');
const cors = require('cors');

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

//Criando a porta de acesso back end
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
// app.post('/servicos',async(req,res) => {
//     await servico.create({
//         nome: "Delphi",
//         descricao: "Manutenção e Suporte a sistema legados em Delphi"
//     })
//     res.send('O serviço foi criado com sucesso!')
// })

//Requisição via corpo da página
app.post('/servicos',async(req,res) => {
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

app.post('/clientes',async(req,res) => {
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

app.post('/pedidos',async(req,res) => {
    await pedido.create(
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

app.post('/itempedido',async(req,res) => {
    await itempedido.create(
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