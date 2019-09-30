import { Router } from 'express';

class hotelsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', (req, res) => res.send('hoteles'));
  }
}

const routes = new hotelsRoutes();
export default routes.router;