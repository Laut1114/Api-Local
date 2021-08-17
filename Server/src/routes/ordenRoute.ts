import { Router } from "express";

class OrdenRoute {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/Orden', (req, res) => res.send("Ruta Producto"));
    }
}

const ordenRoute = new OrdenRoute();
export default ordenRoute;