import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

import { HotelsService } from './services/hotels.service';
import { HotelsFiltersComponent } from './components/hotels-filters/hotels-filters.component';
import { HotelsCardComponent } from './components/hotels-card/hotels-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelListComponent,
    HotelsFiltersComponent,
    HotelsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
