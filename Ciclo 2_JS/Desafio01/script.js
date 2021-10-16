import { criarLista , adicionarProdutos , removerProdutos , checarTotal } from './functions.js'

    var lista = [
        {'item':'Mamão','preco':3.10},
        {'item':'Melão','preco':4.25},
        {'item':'Maçã','preco':5.18},
        {'item':'Maracujá','preco':5.00},
        {'item':'Manga','preco':2.11},
    ];

    // Criar a lista usando o objeto
    criarLista(lista,'produtos')

    // Mapeamento dos itens
    const listaProduto = document.querySelectorAll('#produtos');
    const listaCesta = document.querySelectorAll('#cestaDoCliente');
    const totalCompra = document.querySelector('#mostraTotalCompra');
    var valor = 0;

    // Selecionando produtos para cesta
    listaProduto.forEach(function(lista){
        lista.addEventListener('click',function(elemento){
            let item = elemento.target.dataset.item;
            let preco = elemento.target.dataset.preco
            adicionarProdutos(item,preco,'cestaDoCliente')
            totalCompra.value = checarTotal(valor,'cestaDoCliente')
        })
    })

    // Removendo produtos da cesta
    listaCesta.forEach(function(lista){
        lista.addEventListener('click',function (elemento){
            removerProdutos('cestaDoCliente')
            totalCompra.value = checarTotal(valor,'cestaDoCliente')
        })
    })
