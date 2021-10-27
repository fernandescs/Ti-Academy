import { Container } from "reactstrap"

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                    <div className="p-2">
                        <a href="/listar-clientes"
                            className="btn btn-outline-success btn-sm">
                            Clientes
                        </a>
                    </div>
                    <div className="p-2">
                        <a href="/listar-pedidos"
                            className="btn btn-outline-success btn-sm">
                            Pedidos
                        </a>
                    </div>
                    <div className="p-2">
                        <a href="/listar-servicos"
                            className="btn btn-outline-success btn-sm">
                            Serviços
                        </a>
                    </div>
                </div>
            </Container>

        </div>
    )
}