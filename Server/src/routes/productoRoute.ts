import { Router } from "express";
import productosController from "../controllers/productoController";

class ProductosRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', productosController.getProductos);
        this.router.post('/', productosController.create);
        this.router.delete('/:id', productosController.delete);
        this.router.put('/:id', productosController.update);
    }
}

const productosRoutes = new ProductosRoutes();
export default productosRoutes;