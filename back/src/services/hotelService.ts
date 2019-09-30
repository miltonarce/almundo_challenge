import hotels from '../store/data.json';

export default class HotelService {
  static getAll() {
    return hotels;
  }

}