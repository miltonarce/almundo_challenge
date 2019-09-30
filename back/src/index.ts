import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
// import expressHealthCheck from 'express-healthcheck';
import swaggerDocument from './swagger.json';
import swaggerUi from 'swagger-ui-express';
import cacheDNS from './shared/cache-dns';

import Routes from './routes/indexRoutes';

class Server {
  public server: Application;

  constructor() {
    this.server = express();
    this.config();
    this.routes();
  }

  config(): void {
    cacheDNS();
    this.server.set('port', process.env.port || 3001);
    this.server.use(compression());
    this.server.use(cors());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes(): void {
    this.server.use('/api', Routes);
    // this.server.use('/api/healthcheck', expressHealthCheck());
    this.server.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  start(): void {
    this.server.listen(this.server.get('port'), () => {
      console.log('Server running on port', this.server.get('port'));
    });
  }
}

const server = new Server();
server.start();
