import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'module-alias/register';
// import expressHealthCheck from 'express-healthcheck';
import swaggerDocument from './swagger.json';
import swaggerUi from 'swagger-ui-express';
import cacheDNS from '@shared/cache-dns';

import Routes from '@routes/indexRoutes';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

cacheDNS();

server.use(compression());
server.use(cors());
// this.server.use('/api/healthcheck', expressHealthCheck());
server.set('port', process.env.port || 3001);
server.use('/api', Routes);
server.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.listen(server.get('port'), () => {
  console.log('Server running on port', server.get('port'));
});










