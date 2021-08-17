import { Request, Response } from "express";
import pool from "../database";

class ClienteController {

    async getCliente(req: Request, res: Response) {
        const cliente = await pool.query('SELECT * FROM cliente');
        res.json(cliente)
    }

    async create(req: Request, res: Response) {
        await pool.query('INSERT INTO cliente set ?', [req.body]);
        res.json({
            ok: true,
            message: 'Cliente Guardado' 
        });
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM cliente WHERE id = ?', [id]);
        res.json({
            ok: true,
            message: 'Cliente Eliminado'
        });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE FROM cliente WHERE id = ?', [id]);
        res.json({
            ok: true,
            message: 'Cliente Actualizado'
        });
    }
}

const clientesController = new ClienteController();
export default clientesController;