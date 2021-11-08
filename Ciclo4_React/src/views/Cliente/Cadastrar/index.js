import { Link } from "react-router-dom"
import { useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import axios from "axios";
import { api } from "../../../config"


export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        nascimento: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const cadCliente = async e => {
        e.preventDefault();
        console.log(cliente);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/cadastrarcliente", cliente, { headers })
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
                    <h1>Cadastrar Cliente</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-clientes"
                        className="btn btn-outline-primary btn-sm">Clientes</Link>
                </div>
            </div>

            <hr className="m-1" />
            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

            <Form className="p-2" onSubmit={cadCliente}>
                <FormGroup className="p-2">
                    <Label for="nome">Nome</Label>
                    <Input
                        id="nome"
                        name="nome"
                        placeholder="Nome Completo"
                        type="text"
                        onChange={valorInput}
                        required
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label for="endereco">Endereço</Label>
                    <Input
                        id="endereco"
                        name="endereco"
                        placeholder="Endereço Completo com número"
                        type="text"
                        onChange={valorInput}
                        required
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label for="nascimento">
                        Data de Nascimento
                    </Label>
                    <Input
                        id="nascimento"
                        name="nascimento"
                        // placeholder="AAAA-MM-DD"
                        type="date"
                        onChange={valorInput}
                        required
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