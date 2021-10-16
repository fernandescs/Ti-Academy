window.onload = function () {

    let produtos = [
        {descricao : 'Bolacha', preco:2.20},
        {descricao : 'Sabonete', preco:1.50},
        {descricao : 'Marmelada', preco:5.00}
    ]

    // mapear elementos
    const listaProdutos = document.querySelector("#listaProdutos");
    const Total = document.querySelector("#total");

    ( ()=>{
        let totalzinho=0;
        for (let pro of produtos){ // Ler o array
            const filhoLi = document.createElement('li');

            for (listaP in pro){ // ler os elementos do objeto
                if (listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
                    totalzinho += pro[listaP];
                } else {
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }
            }
        }
        Total.value = totalzinho.toFixed(2);
    } )(produtos)

}