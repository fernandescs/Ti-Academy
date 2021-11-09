import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Menu } from './components/Menu';
import { Home } from './views/Home';
import { ListarClientes } from './views/Cliente/Listar';
import { CadastrarCliente } from './views/Cliente/Cadastrar';
import { EditarCliente } from './views/Cliente/Editar';
import { PedidosCliente } from './views/Cliente/PedidosCliente';
import { ComprasCliente } from './views/Cliente/ComprasCliente';


import { ListarPedidos  } from './views/Pedido/Listar';

import { ListarServicos } from './views/Servico/Listar';

import { ListarCompra } from './views/Compra/Listar';
import { CadastrarCompra } from './views/Compra/Cadastrar';
import { EditarCompra } from './views/Compra/Editar';
import { VerCompra } from './views/Compra/Consulta';
import { AdicionarItemCompra } from './views/ItemCompra/AdicionarItem';
import { EditarItemCompra } from './views/ItemCompra/EditarItem';


import { ListarProduto } from './views/Produto/Listar';
import { CadastrarProduto } from './views/Produto/Cadastrar';
import { EditarProduto } from './views/Produto/Editar';
import { VerProduto } from './views/Produto/Consultar';


import { Item } from './views/Servico/Item';
import { VerPedido } from './views/Pedido/Visualizar';
import { CadastrarServico } from './views/Servico/Cadastrar';



function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-clientes" component={ListarClientes}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route path="/editarcliente/:id" component={EditarCliente}/>
          <Route path="/cliente/:id/pedidos" component={PedidosCliente}/>
          <Route path="/cliente/:id/compras" component={ComprasCliente}/>


          <Route path="/listar-compras" component={ListarCompra}/>
          <Route path="/cadastrarcompra" component={CadastrarCompra}/>
          <Route path="/editarcompra/:id" component={EditarCompra}/>
          <Route path="/compra/:id" component={VerCompra}/>

          <Route path="/itemcompra/:id/adicionaritem" component={AdicionarItemCompra}/>
          <Route path="/itemcompra/:id/editaritem/:ProdutoId" component={EditarItemCompra }/>

          <Route path="/listar-produtos" component={ListarProduto}/>
          <Route path="/cadastrarproduto" component={ CadastrarProduto }/>
          <Route path="/editarproduto/:id" component={EditarProduto}/>
          <Route path="/produto/:id" component={VerProduto}/>






          <Route path="/listar-pedido/:id" component={Item}/>
          <Route path="/pedido/:id" component={VerPedido}/>
          <Route path="/cadastrarservico" component={CadastrarServico}/>
          <Route path="/listar-pedidos" component={ListarPedidos}/>
          <Route path="/listar-servicos" component={ListarServicos}/>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
