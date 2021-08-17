import { Router } from "express";

class ClienteRoute {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send("Ruta Cliente"));
    }
}

const clientesRoute = new ClienteRoute();
export default clientesRoute;