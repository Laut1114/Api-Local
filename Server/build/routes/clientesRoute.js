"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesController_1 = __importDefault(require("../controllers/clientesController"));
// Ruta: localhost:3000/api/clientes
class ClientesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clientesController_1.default.getCliente);
        this.router.post('/nuevo_cliente', clientesController_1.default.create);
        this.router.delete('/:id', clientesController_1.default.delete);
        this.router.put('/:id', clientesController_1.default.update);
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes;
