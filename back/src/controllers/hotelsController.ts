import { Request, Response } from 'express';

import hotelService from '../services/hotelService';

class HotelsController {

  public getAllHotels(req: Request, res: Response) {
    res.json(hotelService.getAll());
  }
}

export const hotelsController = new HotelsController();