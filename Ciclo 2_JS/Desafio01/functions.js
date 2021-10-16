// Cria uma Lista (ul) com as informações do objeto
function criarLista (objeto,id){
    const lista = document.querySelector(`#${id}`);
    for (let item of objeto){
        let li = document.createElement('li');
        for (let dado in item){
            if (dado == 'item'){
                lista.appendChild(li).setAttribute('data-item', `${item[dado]}`);
                lista.appendChild(li).textContent = item[dado];
            }
            if (dado == 'preco'){
                lista.appendChild(li).setAttribute('data-preco', `${item[dado]}`);
            }
        }
    }
}

// Adicionar produtos na lista
function adicionarProdutos (item,preco,id){
    const listaAtual = document.querySelectorAll(`#${id} > li`);
    for (let produto of listaAtual){
        if (produto.dataset.item == item){
            alert(`O item ${item} já está na cesta!`);
            return;
        }
    }
    if (!isNaN(Number(preco))){
        const lista = document.querySelector(`#${id}`);
        let li = document.createElement('li');
        lista.appendChild(li).setAttribute('data-item', `${item}`);
        lista.appendChild(li).setAttribute('data-preco', `${preco}`);
        lista.appendChild(li).textContent = item;
    }
}

// Remover produtos da lista
function removerProdutos (id){
    const lista = document.querySelectorAll(`#${id} > li`);
    for (let produto of lista){
        produto.addEventListener('click',function(){
        produto.remove();
        })
    }
}

// Checar Total
function checarTotal(valor,id) {
    const listaAtual = document.querySelectorAll(`#${id} > li`);
    for (let produto of listaAtual){
        valor += Number(produto.dataset.preco)
    }
    return valor.toLocaleString('pt-br',{style: 'currency',currency:'BRL'})
}

export { criarLista , adicionarProdutos , removerProdutos , checarTotal }