import { Router } from "express";
import ordenesController from "../controllers/ordenController";

class OrdenesRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ordenesController.getOrdenes);
        this.router.post('/', ordenesController.create);
        this.router.delete('/:id', ordenesController.delete);
        this.router.put('/:id', ordenesController.update);
    }
}

const ordenesRoutes= new OrdenesRoutes();
export default ordenesRoutes;