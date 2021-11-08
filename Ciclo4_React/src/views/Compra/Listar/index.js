import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarCompra = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getCompra = async () => {
        await axios.get(api + "/compras")
            .then((response) => {
                setData(response.data.compras);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: "Não foi possível conectar a api."
                })
            })
    }

    const apagarCompra = async (idCompra) => {
        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + "/excluircompra/" + idCompra,{ headers })
            .then((response) => {
                console.log(response.data.error);
                getCompra();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conetar-se a API.'
                });
            });
    }

    useEffect(() => {
        getCompra()
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar Compras</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastrarcompra"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    {/* Testar se houve error */}
                    {status.type === 'error' ?
                        <Alert color="danger">
                            {status.message}
                        </Alert> : ''}
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Data</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.ClienteId}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                    <Link to={"/compra/" + item.id}
                                        className="btn btn-outline-info btn-sm mx-auto">
                                        Consultar
                                    </Link>
                                    <Link to={"/editarcompra/" + item.id}
                                        className="btn btn-outline-success btn-sm mx-auto">
                                        Editar
                                    </Link>
                                    <span className="btn btn-outline-danger btn-sm"
                                        onClick={() => apagarCompra(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}