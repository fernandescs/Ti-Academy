import { Container } from "reactstrap"

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                </div>
                <div className="p-2">
                    <a href="/listar-clientes"
                        className="btn btn-outline-success btn-sm">
                        Clientes
                    </a>
                    <a href="/listar-pedidos"
                        className="btn btn-outline-success btn-sm">
                        Pedidos
                    </a>
                    <a href="/listar-servicos"
                        className="btn btn-outline-success btn-sm">
                        Serviços
                    </a>
                </div>
            </Container>

        </div>
    )
}