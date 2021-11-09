import { Link } from "react-router-dom"
import { useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import axios from "axios";
import { api } from "../../../config"


export const AdicionarItemCompra = (props) => {

    const [id, setId] = useState(props.match.params.id)
    const [itemcompra, setItemCompra] = useState({
        CompraId: id,
        ProdutoId: '',
        quantidade: '',
        valor: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorInput = e => setItemCompra({
        ...itemcompra, [e.target.name]: e.target.value
    });

    const cadItemCompra = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/novoitemcompra", itemcompra, { headers })
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
                <div className=" p-2">
                    <h1>Adicionar Item</h1>
                </div>
                <div className="p-2 m-auto">
                    <Link to={"/compra/" + id }
                        className="btn btn-outline-primary btn-sm">Compra</Link>
                </div>
            </div>

            <hr className="m-1" />
            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

            <Form className="p-2" onSubmit={cadItemCompra}>
                <FormGroup className="p-2">
                    <Label for="ProdutoId">ID do Produto</Label>
                    <Input
                        id="ProdutoId"
                        name="ProdutoId"
                        placeholder="Insira o ID do produto"
                        type="text"
                        onChange={valorInput}
                        required
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label for="quantidade">Quantidade</Label>
                    <Input
                        id="quantidade"
                        name="quantidade"
                        placeholder="Quantidade desejada"
                        type="text"
                        onChange={valorInput}
                        required
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label for="valor">
                        Valor Total deste item
                    </Label>
                    <Input
                        id="valor"
                        name="valor"
                        placeholder="Valor total deste item (4.00)"
                        type="text"
                        onChange={valorInput}
                        required
                    />
                </FormGroup>

                    <Button type="submit" outline color="success" className="m-2">
                        Adicionar
                    </Button>
                    <Button type="reset" outline dark color="warning">
                        Limpar
                    </Button>


            </Form>
        </Container>
    )
}