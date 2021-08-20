import { Request, Response } from "express";
import pool from "../database";

class OrdenesController {

    async getOrdenes(req: Request, res: Response) {
        const ordenes = await pool.query('SELECT * FROM orden');
        res.json(ordenes)
    }

    //GET orden por id
    async getOrdenID(req: Request, res: Response) {
        const {id} = req.params;
        const orden = await pool.query('SELECT id_cliente, id_producto, cantidad FROM orden WHERE id_orden = ?', [id]);
        res.json(orden);
    }

    async create(req: Request, res: Response) {
        await pool.query('INSERT INTO orden set ?', [req.body]);
        res.json({
            message: 'Nueva orden de compra agregada'
        });
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM orden WHERE id_orden = ?', [id]);
        res.json({
            message: 'Orden de compra elimanada'
        });
    }

    async update(req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('UPDATE orden SET ? WHERE id_orden = ?', [req.body,id]);
        res.json({
            message: 'Orden de compra actualizada'
        });
    }
}

const ordenesController = new OrdenesController();
export default ordenesController;