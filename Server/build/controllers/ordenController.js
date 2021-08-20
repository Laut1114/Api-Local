"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class OrdenesController {
    getOrdenes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ordenes = yield database_1.default.query('SELECT * FROM orden');
            res.json(ordenes);
        });
    }
    //GET orden por id
    getOrdenID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const orden = yield database_1.default.query('SELECT id_cliente, id_producto, cantidad FROM orden WHERE id_orden = ?', [id]);
            res.json(orden);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO orden set ?', [req.body]);
            res.json({
                message: 'Nueva orden de compra agregada'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM orden WHERE id_orden = ?', [id]);
            res.json({
                message: 'Orden de compra elimanada'
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE orden SET ? WHERE id_orden = ?', [req.body, id]);
            res.json({
                message: 'Orden de compra actualizada'
            });
        });
    }
}
const ordenesController = new OrdenesController();
exports.default = ordenesController;
