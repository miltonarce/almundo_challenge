import hotels from '../store/data.json';

export default class HotelService {

  static getHotels(query: string) {
    console.log('Estos es query', query)
    if (query) {
      return hotels.filter(h => { if (query == h.name) return h }
      );
    } else {
      return hotels;
    }
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

  static normalizeRequest(request: string) {
    console.log('esto es normal', request);

    const filters: object = {
      name: request.name || null,
      stars: request.stars || null
    }
    return filters;
  }
}