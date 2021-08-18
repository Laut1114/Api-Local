import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRoute from './routes/indexRoutes';
import clientesRoutes from './routes/clientesRoute';
import productosRoutes from './routes/productoRoute';
import ordenesRoutes from './routes/ordenRoute';

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
        this.app.use('/', indexRoute);
        this.app.use('/clientes', clientesRoutes);
        this.app.use('/productos', productosRoutes);
        this.app.use('/orden_compra', ordenesRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server run on port:', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();