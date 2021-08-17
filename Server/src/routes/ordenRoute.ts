import { Router } from "express";
import ordenesController from "../controllers/ordenController";

class OrdenesRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/orden', ordenesController.getOrdenes);
        this.router.post('/orden', ordenesController.create);
        this.router.delete('/orden:id', ordenesController.delete);
        this.router.put('/orden:id', ordenesController.update);
    }
}

const ordenesRoutes= new OrdenesRoutes();
export default ordenesRoutes;