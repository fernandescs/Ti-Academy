import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//props é para associar um parâmetro (no caso o id)
export const VerCompra = (props) => {

    // console.log(props.match.params.id)
    const [id, setId] = useState(props.match.params.id);
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getItensCompras = async () => {
        await axios.get(api + "/compra/" + id + "/listaritem")
            .then((response) => {
                setData(response.data.compra);
            })
            .catch(() => {
                // console.log("Não foi possível conectar a api.")
                setStatus({
                    type: 'error',
                    message: "Não foi possível conectar a api."
                })
            })
    }

    const apagarItem = async (idCompra,idProduto) => {
        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + "/compra/" + idCompra + "/excluiritem/" + idProduto , { headers })
            .then((response) => {
                console.log(response.data.error);
                getItensCompras();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conetar-se a API.'
                });
            });
    }

    useEffect(() => {
        getItensCompras()
    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Itens da Compra</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/listar-compras" className="btn btn-outline-primary btn-sm">
                            Compras
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
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ProdutoId}>
                                <th>{item.ProdutoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                {/* Ver pedido */}
                                <td className="text-center">
                                    {/* Link para editar é um teste */}
                                    <Link to={"/itemcompra/" + id + "/editaritem/" + item.ProdutoId}
                                        className="btn btn-outline-success btn-sm mx-auto">
                                        Editar
                                    </Link>
                                    <span className="btn btn-outline-danger btn-sm"
                                        onClick={() => apagarItem(id,item.ProdutoId)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div>
                    <Link to={"/itemcompra/"+ id + "/adicionaritem"} className="btn btn-outline-dark btn-sm mx-auto ">
                        Adicionar Item
                    </Link>
                </div>
            </Container>
        </div>
    )
}