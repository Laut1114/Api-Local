import { Router } from "express";
import clientesController from "../controllers/clientesController";

class ClienteRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/cliente', clientesController.getCliente);
        this.router.post('/cliente', clientesController.create);
        this.router.delete('/cliente:id', clientesController.delete);
        this.router.put('/cliente:id', clientesController.update);
    }
}

const clientesRoutes = new ClienteRoutes();
export default clientesRoutes;