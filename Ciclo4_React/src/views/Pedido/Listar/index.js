import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarPedidos = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getPedidos = async () => {
        await axios.get(api + "/listar-pedidos")
            .then((response) => {
                // console.log(response.data.servicos);
                setData(response.data.pedidos);
            })
            .catch(() => {
                // console.log("Não foi possível conectar a api.")
                setStatus({
                    type: 'error',
                    message: "Não foi possível conectar a api."
                })
            })
    }

    useEffect(() => {
        getPedidos()
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar Pedidos</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastrarpedido"
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
                                    <Link to={"/listar-pedido/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}