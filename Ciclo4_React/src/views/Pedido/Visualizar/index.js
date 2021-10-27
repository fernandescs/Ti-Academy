import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//props é para associar um parâmetro (no caso o id)
export const VerPedido = (props) => {

    // console.log(props.match.params.id)
    const [id, setId] = useState(props.match.params.id);
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getPedido = async () => {
        await axios.get(api + "/pedido/"+ id + "/itens")
            .then((response) => {
                setData(response.data.ped);
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
        getPedido()
    }, [id])

    return (
        <div>
            <Container>
                <div>
                    <h1>Visualizar pedido</h1>
                </div>
                {/* Testar se houve error */}
                {status.type === 'error' ?
                <Alert color="danger">
                    {status.message}
                </Alert> : ''} 

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID Serviço</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ServicoId}>
                                <th>{item.ServicoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td>---</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}