import { Router } from "express";
import ordenesController from "../controllers/ordenController";

// Ruta: localhost:3000/api/orden_compra

class OrdenesRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ordenesController.getOrdenes);
        this.router.get('/:id', ordenesController.getOrdenID);
        this.router.post('/nueva_orden', ordenesController.create);
        this.router.delete('/:id', ordenesController.delete);
        this.router.put('/:id', ordenesController.update);
    }
}

const ordenesRoutes= new OrdenesRoutes();
export default ordenesRoutes;