import { Router } from "express";

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send("Ruta conectada!!"));
    }
}

const indexRoute = new IndexRoutes();
export default indexRoute.router;