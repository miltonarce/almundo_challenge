import { Request, Response, NextFunction } from 'express';

import hotelService from '@services/hotelService';

class HotelsController {
  public getHotels(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(hotelService.getHotels(req.query));
    } catch (err) {
      next(err);
    }
  }

  public async createHotel(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.json(hotelService.create(req.body));
    } catch (err) {
      next(err);
    }
  }

  public deleteHotel(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(hotelService.delete(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  public updateHotel(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(hotelService.update(req.params.id));
    } catch (err) {
      next(err);
    }
  }
}

export const hotelsController = new HotelsController();