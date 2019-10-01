import hotels from '@store/data.json';
import { Filters } from '@shared/interfaces/hotel';

export default class HotelService {

  static getHotels(filters: Filters) {

    const stars = filters.stars ? filters.stars.map(star => parseInt(star)) : null;
    let filtered = hotels;

    if (filters.name) filtered = filtered.filter(hotel => hotel.name.includes(filters.name));
    if (stars) filtered = filtered.filter((hotel: { stars: any; }) => stars.includes(hotel.stars));
    return filtered;
  }

  static create(request: Object) {
    return {
      id: Math.random(),
      date: new Date()
    }
  }

  static delete(id: string) {
    return {
      msg: `Hotel ${id} deleted success`
    };
  }

  static update(id: string) {
    return {
      msg: `Hotel ${id}  updated success`
    };
  }
}