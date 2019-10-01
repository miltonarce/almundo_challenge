import { Router } from 'express';

import { hotelsController } from '@controllers/hotelsController';

class hotelsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', hotelsController.getHotels);
    this.router.post('/', hotelsController.createHotel);
    this.router.delete('/:id', hotelsController.deleteHotel);
    this.router.put('/:id', hotelsController.updateHotel);
  }
}

const routes = new hotelsRoutes();
export default routes.router;