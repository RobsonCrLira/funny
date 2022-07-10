import express from 'express';
import cors from 'cors';
import router from './routes';

class App {
    server;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.server.set('trust proxy', true);
        this.server.use(cors({ origin: '*' }));
        this.server.use(express.json());
        this.server.disable('x-powered-by');
    }

    private routes() {
        this.server.use(router);
    }
}
export default new App().server;
