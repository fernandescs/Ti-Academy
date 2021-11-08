import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarClientes = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getCliente = async () => {
        await axios.get(api + "/listar-clientes")
            .then((response) => {
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: "Não foi possível conectar a api."
                })
            })
    }

    const apagarCliente = async (idCliente) => {
        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + "/excluircliente/" + idCliente,{ headers })
            .then((response) => {
                console.log(response.data.error);
                getCliente();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conetar-se a API.'
                });
            });
    }

    useEffect(() => {
        getCliente()
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar Clientes</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastrarcliente"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    {/* Testar se houve error */}
                    {status.type === 'error' ?
                        <Alert color="danger">
                            {status.message}
                        </Alert> : ''}
                </div>

                <Table responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Data de Nascimento</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center">
                                    <Link to={"/cliente/" + item.id + "/pedidos"} 
                                        className="btn btn-outline-info btn-sm mx-auto">
                                        Pedidos
                                    </Link>
                                    <Link to={"/cliente/" + item.id + "/compras"}
                                        className="btn btn-outline-primary btn-sm mx-auto">
                                        Compras
                                    </Link>
                                    <Link to={"/editarcliente/" + item.id}
                                        className="btn btn-outline-success btn-sm mx-auto">
                                        Editar
                                    </Link>
                                    <span className="btn btn-outline-danger btn-sm"
                                        onClick={() => apagarCliente(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}