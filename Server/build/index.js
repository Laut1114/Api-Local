"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const clientesRoute_1 = __importDefault(require("./routes/clientesRoute"));
const productoRoute_1 = __importDefault(require("./routes/productoRoute"));
const ordenRoute_1 = __importDefault(require("./routes/ordenRoute"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/clientes', clientesRoute_1.default);
        this.app.use('/productos', productoRoute_1.default);
        this.app.use('/orden_compra', ordenRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server run on port:', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
