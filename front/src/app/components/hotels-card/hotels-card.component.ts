import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotels-card',
  templateUrl: './hotels-card.component.html',
  styleUrls: ['./hotels-card.component.scss']
})
export class HotelsCardComponent implements OnInit {
  @Input() hotel: any = {};
  stars: any = [];
  amenities: any = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.hotel.stars; i++) {
      this.stars.push('X');
    }
    this.amenities = this.hotel.amenities;
  }

}
