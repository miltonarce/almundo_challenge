import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from "@angular/material/icon";

import { HeaderComponent } from './components/header/header.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelsService } from './services/hotels.service';
import { HotelsFiltersComponent } from './components/hotels-filters/hotels-filters.component';
import { HotelsCardComponent } from './components/hotels-card/hotels-card.component';
import { HotelViewComponent } from './components/hotel-view/hotel-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelListComponent,
    HotelsFiltersComponent,
    HotelsCardComponent,
    HotelViewComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
