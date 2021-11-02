import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Menu } from './components/Menu'
import { Home } from './views/Home'
import { ListarClientes } from './views/Cliente/Listar'
import { ListarPedidos  } from './views/Pedido/Listar'
import { ListarServicos } from './views/Servico/Listar'
import { Item } from './views/Servico/Item'
import { VerPedido } from './views/Pedido/Visualizar'
import { CadastrarServico } from './views/Servico/Cadastrar';


function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-clientes" component={ListarClientes}/>
          <Route path="/listar-pedidos" component={ListarPedidos}/>
          <Route path="/listar-servicos" component={ListarServicos}/>
          <Route path="/listar-pedido/:id" component={Item}/>
          <Route path="/pedido/:id" component={VerPedido}/>
          <Route path="/cadastrarservico" component={CadastrarServico}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
