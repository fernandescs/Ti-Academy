import { Alert, Container, Table } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListarProduto = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getProdutos = async () => {
        await axios.get(api + "/produtos")
            .then((response) => {
                setData(response.data.produtos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: "Não foi possível conectar a api."
                })
            })
    }

    const apagarProduto = async (idProduto) => {
        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + "/excluirproduto/" + idProduto,{ headers })
            .then((response) => {
                console.log(response.data.error);
                getProdutos();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conetar-se a API.'
                });
            });
    }

    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar Produtos</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastrarproduto"
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
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">
                                    <Link to={"/produto/" + item.id}
                                        className="btn btn-outline-info btn-sm mx-auto">
                                        Consultar
                                    </Link>
                                    <Link to={"/editarproduto/" + item.id}
                                        className="btn btn-outline-success btn-sm mx-auto">
                                        Editar
                                    </Link>
                                    <span className="btn btn-outline-danger btn-sm"
                                        onClick={() => apagarProduto(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}