import { Request, Response } from "express";
import pool from "../database";

class ProductosController {

    async getProductos(req: Request, res: Response) {
        const productos = await pool.query('SELECT * FROM producto');
        res.json(productos)
    }

    async create(req: Request, res: Response) {
        await pool.query('INSERT INTO producto set ?', [req.body]);
        res.json({
            ok: true,
            message: 'Producto Agregado'
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM producto WHERE id = ?', [id]);
        res.json({
            ok: true,
            message: 'Producto Eliminado'
        });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE FROM producto WHERE id = ?', [id]);
        res.json({
            ok: true,
            message: 'Producto Actualizado'
        });
    }
}

const productosController = new ProductosController();
export default productosController;