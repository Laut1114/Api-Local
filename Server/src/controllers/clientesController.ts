import { Request, Response } from "express";
import pool from "../database";

class ClientesController {

    async getCliente(req: Request, res: Response) {
        const cliente = await pool.query('SELECT * FROM cliente');
        res.json(cliente)
    }

    async create(req: Request, res: Response) {
        await pool.query('INSERT INTO cliente set ?', [req.body]);
        res.json({
            message: 'Cliente Guardado' 
        });
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM cliente where id_cliente = ?', [id]);
        res.json({
            message: 'Cliente Eliminado'
        });
    }

    async update(req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('UPDATE cliente SET ? WHERE id_cliente = ?', [req.body, id]);
        res.json({
            message: 'Cliente Actualizado'
        });
    }
}

const clientesController = new ClientesController();
export default clientesController;