import { Router } from "express";
import productosController from "../controllers/productoController";

class ProductosRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/productos', productosController.getProductos);
        this.router.post('/productos', productosController.create);
        this.router.delete('/productos:id', productosController.delete);
        this.router.put('/productos:id', productosController.update);
    }
}

const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;