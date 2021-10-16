// Script criar elemento
// elementos disponíveis
    //produto = caixa de texto
    //cadastrar = botão
    //listaDeProdutos lista

window.onload = function(){
    //mapear elementos
    const cxProduto = document.querySelector("#produto")
    const btnCadastrar = document.querySelector("#cadastrar")
    const lista = document.querySelector("#listaDeProdutos")

    //ao clicar no botão criar um elemento li na lista com o texto da caixa
    btnCadastrar.addEventListener('click',function(){
        let li = document.createElement('li');
        lista.appendChild(li).setAttribute('class','listaDeFrutas') // insere um atributo
        lista.appendChild(li).textContent = cxProduto.value
    })
}