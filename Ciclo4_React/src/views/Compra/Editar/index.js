import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarCompra = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [ClienteId, setClienteId] = useState('');
    const [data, setData] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const edtCompra = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/editarcompra",
            { id, ClienteId, data }, { headers })
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
        const getCompra = async () => {
            await axios.get(api + "/compra/" + id)
                .then((response) => {
                    setId(response.data.compra.id);
                    setClienteId(response.data.compra.ClienteId);
                    setData(response.data.compra.data);
                })
                .catch(() => {
                    console.log("Erro: não foi possível se conectar a API.")
                })
        }
        getCompra();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Editar Compra</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/listar-compras"
                            className="btn btn-outline-primary btn-sm">Compras</Link>
                    </div>
                </div>
                {/* Testar se houve error */}
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Form className="p-2" onSubmit={edtCompra}>

                    <FormGroup className="p-2">
                        <Label>ID Compra</Label>
                        <Input type="text" name="id"
                            placeholder="Id do Cliente"
                            defaultValue={id} disabled />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>ID do Cliente</Label>
                        <Input type="text" name="ClienteId"
                            placeholder="Alterar ID do Cliente" defaultValue={ClienteId}
                            onChange={e => setClienteId(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data da Compra</Label>
                        <Input type="date" name="data"
                            placeholder="Data da Compra" defaultValue={data}
                            onChange={e => setData(e.target.value)} />
                    </FormGroup>

                    <Button type="submit" outline color="warning">Salvar</Button>
                    
                </Form>
            </Container>

        </div>
    )
}