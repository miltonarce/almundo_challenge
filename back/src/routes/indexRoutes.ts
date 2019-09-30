import { Router } from 'express';

import hotelRoutes from './hotelRoutes';

class indexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/api-status', (req, res) => res.json({ status: 'ok', msg: 'Api funcionando correctamente...' }));
    this.router.use('/hotels', hotelRoutes);
  }
}

const routes = new indexRoutes();
export default routes.router;