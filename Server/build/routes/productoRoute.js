"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = __importDefault(require("../controllers/productoController"));
// Ruta: localhost:3000/api/productos
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productoController_1.default.getProductos);
        this.router.post('/nuevo_producto', productoController_1.default.create);
        this.router.delete('/:id', productoController_1.default.delete);
        this.router.put('/:id', productoController_1.default.update);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes;
