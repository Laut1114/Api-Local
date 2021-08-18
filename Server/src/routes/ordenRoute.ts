import { Router } from "express";
import ordenesController from "../controllers/ordenController";

class OrdenesRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/orden_compra', ordenesController.getOrdenes);
        this.router.post('/orden_compra', ordenesController.create);
        this.router.delete('/orden_compra:id', ordenesController.delete);
        this.router.put('/orden_compra:id', ordenesController.update);
    }
}

const ordenesRoutes= new OrdenesRoutes();
export default ordenesRoutes.router;