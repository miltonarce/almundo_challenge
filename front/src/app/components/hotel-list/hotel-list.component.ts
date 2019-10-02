import { Component, OnInit } from '@angular/core';

import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  hotels: any = [];
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getHotels().subscribe(
      res => this.hotels = res,
      err => console.error(err)
    );
  }

}
