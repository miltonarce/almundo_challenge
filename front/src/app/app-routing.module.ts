import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/hotels',
    pathMatch: 'full'
  },
  {
    path: 'hotels',
    component: HotelListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
