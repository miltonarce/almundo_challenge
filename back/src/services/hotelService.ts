import hotels from '../store/data.json';

export default class HotelService {
  static getAll() {
    return hotels;
  }

  static create(request: object) {
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