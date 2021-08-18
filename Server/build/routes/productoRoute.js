"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = __importDefault(require("../controllers/productoController"));
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/productos', productoController_1.default.getProductos);
        this.router.post('/productos', productoController_1.default.create);
        this.router.delete('/productos:id', productoController_1.default.delete);
        this.router.put('/productos:id', productoController_1.default.update);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
