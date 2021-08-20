import { Router } from "express";
import productosController from "../controllers/productoController";

// Ruta: localhost:3000/api/productos

class ProductosRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', productosController.getProductos);
        this.router.post('/nuevo_producto', productosController.create);
        this.router.delete('/:id', productosController.delete);
        this.router.put('/:id', productosController.update);
    }
}

const productosRoutes = new ProductosRoutes();
export default productosRoutes;