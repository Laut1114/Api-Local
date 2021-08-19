import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRoutes from './routes/indexRoutes';
import clientesRoutes from './routes/clientesRoute';
import productoRoute from './routes/productoRoute';
import ordenRoute from './routes/ordenRoute';

class Server {
    public app: Application
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use('/', indexRoutes.router);
        this.app.use('/api/clientes', clientesRoutes.router);
        this.app.use('/api/productos', productoRoute.router);
        this.app.use('/api/orden_compra', ordenRoute.router);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server run on port:', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();