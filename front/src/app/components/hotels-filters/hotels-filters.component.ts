import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hotels-filters',
  templateUrl: './hotels-filters.component.html',
  styleUrls: ['./hotels-filters.component.scss']
})
export class HotelsFiltersComponent {

  hotel: any = {
    name: '',
    stars: []
  };

  isCollapsed: boolean;

  @Output() filters = new EventEmitter<string>();
  constructor() {
    this.isCollapsed = window.screen.width > 992 ? true : false;
  }

  filterHotels() {
    this.filters.emit(this.hotel.name);
  }

  openFilters() {
    this.isCollapsed = !this.isCollapsed;
  }
}
