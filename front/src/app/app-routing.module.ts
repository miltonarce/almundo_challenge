import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelViewComponent } from './components/hotel-view/hotel-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/hotels',
    pathMatch: 'full'
  },
  {
    path: 'hotels',
    component: HotelViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
