import { Router } from "express";
import clientesController from "../controllers/clientesController";

class ClientesRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/clientes', clientesController.getCliente);
        this.router.post('/clientes', clientesController.create);
        this.router.delete('/clientes:id', clientesController.delete);
        this.router.put('/clientes:id', clientesController.update);
    }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;