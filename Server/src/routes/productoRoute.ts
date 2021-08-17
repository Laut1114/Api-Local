import { Router } from "express";
import productosController from "../controllers/productoController";

class ProductosRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/producto', productosController.getProductos);
        this.router.post('/producto', productosController.create);
        this.router.delete('/producto:id', productosController.delete);
        this.router.put('/producto:id', productosController.update);
    }
}

const productosRoutes = new ProductosRoutes();
export default productosRoutes;