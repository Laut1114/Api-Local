import { Router } from "express";

class ProductRoute {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/producto', (req, res) => res.send("Ruta Producto"));
    }
}

const productRoute = new ProductRoute();
export default productRoute;