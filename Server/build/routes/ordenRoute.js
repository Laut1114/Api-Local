"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenController_1 = __importDefault(require("../controllers/ordenController"));
class OrdenesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ordenController_1.default.getOrdenes);
        this.router.post('/', ordenController_1.default.create);
        this.router.delete('/:id', ordenController_1.default.delete);
        this.router.put('/:id', ordenController_1.default.update);
    }
}
const ordenesRoutes = new OrdenesRoutes();
exports.default = ordenesRoutes;
