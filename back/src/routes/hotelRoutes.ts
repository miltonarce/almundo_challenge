import { Router } from 'express';

import { hotelsController } from '../controllers/hotelsController';

class hotelsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', hotelsController.getAllHotels);
  }
}

const routes = new hotelsRoutes();
export default routes.router;