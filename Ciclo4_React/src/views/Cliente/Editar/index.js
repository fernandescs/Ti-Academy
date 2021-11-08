import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarCliente = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nascimento, setNascimento] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const edtCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/editarcliente",
            { id, nome, endereco, nascimento }, { headers })
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
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    setId(response.data.cliente.id);
                    setNome(response.data.cliente.nome);
                    setEndereco(response.data.cliente.endereco);
                    setNascimento(response.data.cliente.nascimento);
                })
                .catch(() => {
                    console.log("Erro: não foi possível se conectar a API.")
                })
        }
        getCliente();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Editar Cliente</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/listar-clientes"
                            className="btn btn-outline-primary btn-sm">Clientes</Link>
                    </div>
                </div>
                {/* Testar se houve error */}
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Form className="p-2" onSubmit={edtCliente}>

                    <FormGroup className="p-2">
                        <Label>ID Cliente</Label>
                        <Input type="text" name="id"
                            placeholder="Id do Cliente"
                            defaultValue={id} disabled />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Alterar nome do Cliente" defaultValue={nome}
                            onChange={e => setNome(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="Endereço"
                            placeholder="Novo endereço" defaultValue={endereco}
                            onChange={e => setEndereco(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data de Nascimento</Label>
                        <Input type="date" name="nascimento"
                            placeholder="Alterar data de Nascimento" defaultValue={nascimento}
                            onChange={e => setNascimento(e.target.value)} />
                    </FormGroup>

                    <Button type="submit" outline color="warning">Salvar</Button>
                    <Button type="reset" outline color="success">Limpar</Button>
                </Form>
            </Container>

        </div>
    )
}