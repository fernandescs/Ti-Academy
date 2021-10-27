import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//props é para associar um parâmetro (no caso o id)
export const Item = (props) => {

    // console.log(props.match.params.id)
    const [id, setId] = useState(props.match.params.id);
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getItens = async () => {
        await axios.get(api + "/servico/"+ id + "/pedidos")
            .then((response) => {
                // console.log(response.data.servicos);
                setData(response.data.itens);
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
        getItens()
    }, [id])

    return (
        <div>
            <Container>
                <div>
                    <h1>Visualizar itens com o serviço</h1>
                </div>
                {/* Testar se houve error */}
                {status.type === 'error' ?
                <Alert color="danger">
                    {status.message}
                </Alert> : ''} 

                <Table striped>
                    <thead>
                        <tr>
                            <th>PedidoId</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ServicoId}>
                                <th>{item.PedidoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                {/* Ver pedido */}
                                <td className="text-center/">
                                    <Link to={"/pedido/"+item.PedidoId}
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