import { Link } from "react-router-dom"
import { useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import axios from "axios";
import { api } from "../../../config"


export const CadastrarProduto = () => {

    const [produto, setProduto] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorInput = e => setProduto({
        ...produto, [e.target.name]: e.target.value
    });

    const cadProduto = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/novoproduto", produto, { headers })
            .then((response) => {
                // console.log(response.data.message);
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
                console.log("Não foi possível conectar a API")
            })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Produto</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-produtos"
                        className="btn btn-outline-primary btn-sm">Produtos</Link>
                </div>
            </div>

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

            <Form className="p-2" onSubmit={cadProduto}>
                <FormGroup className="p-2">
                    <Label for="nome">Nome</Label>
                    <Input
                        id="nome"
                        name="nome"
                        placeholder="Nome do Produto"
                        type="text"
                        onChange={valorInput}
                        required
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label for="descricao">
                        Descrição
                    </Label>
                    <Input
                        id="descricao"
                        name="descricao"
                        placeholder="Descrição técnica do produto"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>

                    <Button type="submit" outline color="success" className="m-2">
                        Cadastrar
                    </Button>
                    <Button type="reset" outline dark color="warning">
                        Limpar
                    </Button>


            </Form>
        </Container>
    )
}