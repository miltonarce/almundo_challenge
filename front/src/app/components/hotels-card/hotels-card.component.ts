import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotels-card',
  templateUrl: './hotels-card.component.html',
  styleUrls: ['./hotels-card.component.scss']
})
export class HotelsCardComponent implements OnInit {
  @Input() hotel: any = {};

  constructor() { }

  ngOnInit() {
  }

}
