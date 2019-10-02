import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  API_URI = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }

  getHotels(name: string = '') {
    return this.http.get(`${this.API_URI}/hotels?name=${name}`);
  }

}
