import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarProduto = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const edtProduto = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/editarproduto",
            { id, nome, descricao }, { headers })
            .then((response) => {
                console.log(response.data.error);
                console.log(response.data.message);
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    })
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    })
                }
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conectar a API.'
                });
            });
    }


    useEffect(() => {
        const getProduto = async () => {
            await axios.get(api + "/produto/" + id)
                .then((response) => {
                    setId(response.data.produto.id);
                    setNome(response.data.produto.nome);
                    setDescricao(response.data.produto.descricao);
                })
                .catch(() => {
                    console.log("Erro: não foi possível se conectar a API.")
                })
        }
        getProduto();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Editar Compra</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/listar-produtos"
                            className="btn btn-outline-primary btn-sm">Produtos</Link>
                    </div>
                </div>
                {/* Testar se houve error */}
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Form className="p-2" onSubmit={edtProduto}>

                    <FormGroup className="p-2">
                        <Label>ID Produto</Label>
                        <Input type="text" name="id"
                            placeholder="Id do Produto"
                            defaultValue={id} disabled />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Alterar nome do Produto" defaultValue={nome}
                            onChange={e => setNome(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao"
                            placeholder="Descrição técnica do produto" defaultValue={descricao}
                            onChange={e => setDescricao(e.target.value)} />
                    </FormGroup>

                    <Button type="submit" outline color="warning">Salvar</Button>
                    
                </Form>
            </Container>

        </div>
    )
}