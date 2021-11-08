import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//props é para associar um parâmetro (no caso o id)
export const VerProduto = (props) => {

    // console.log(props.match.params.id)
    const [id, setId] = useState(props.match.params.id);
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getProdutoCompras = async () => {
        await axios.get(api + "/produto/" + id + "/compras")
            .then((response) => {
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
        getProdutoCompras()
    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Pedidos com o produto</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/listar-produtos"
                            className="btn btn-outline-primary btn-sm">Produtos
                        </Link>

                    </div>
                </div>
                {/* Testar se houve error */}
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID do Produto</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ProdutoId}>
                                <th>{item.ProdutoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                {/* Ver pedido */}
                                <td className="text-center/">
                                    Em Construção
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}