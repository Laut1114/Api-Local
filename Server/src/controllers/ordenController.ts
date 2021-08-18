import { Request, Response } from "express";
import pool from "../database";

class OrdenesController {

    async getOrdenes(req: Request, res: Response) {
        const ordenes = await pool.query('SELECT * FROM orden');
        res.json(ordenes)
    }

    async create(req: Request, res: Response) {
        await pool.query('INSERT INTO orden set ?', [req.body]);
        res.json({
            ok: true,
            message: 'Nueva orden de compra agregada'
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM orden WHERE id = ?', [id]);
        res.json({
            ok: true,
            message: 'Orden de compra elimanada'
        });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE FROM orden WHERE id = ?', [id]);
        res.json({
            ok: true,
            message: 'Orden de compra actualizada'
        });
    }
}

const ordenesController = new OrdenesController();
export default ordenesController;