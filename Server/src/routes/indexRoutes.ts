import { Router } from "express";

class IndexRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send("Pagina de Inicio"));
    }
}

const indexRoute = new IndexRoutes();
export default indexRoute.router;