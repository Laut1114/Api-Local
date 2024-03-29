import { Router } from "express";
import clientesController from "../controllers/clientesController";

// Ruta: localhost:3000/api/clientes

class ClientesRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', clientesController.getCliente);
        this.router.post('/nuevo_cliente', clientesController.create);
        this.router.delete('/:id', clientesController.delete);
        this.router.put('/:id', clientesController.update);
    }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes;