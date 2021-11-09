import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//props é para associar um parâmetro (no caso o id)
export const ComprasCliente = (props) => {

    // console.log(props.match.params.id)
    const [id, setId] = useState(props.match.params.id);
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getCompras = async () => {
        await axios.get(api + "/cliente/"+ id + "/compras")
            .then((response) => {
                setData(response.data.compras);
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
        getCompras()
    }, [id])

    return (
        <div>
            <Container>
            <div className="d-flex">
                    <div>
                        <h1>Compras do Cliente</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/listar-clientes"
                            className="btn btn-outline-primary btn-sm">Clientes</Link>
                    </div>
                </div>
                {/* Testar se houve error */}
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Table striped>
                    <thead>
                        <tr>
                            <th>CompraId</th>
                            <th>Data</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.data}</td>
                                {/* Ver pedido */}
                                <td className="text-center/">
                                    <Link to={"/compra/"+item.id}
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