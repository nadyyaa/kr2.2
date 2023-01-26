import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddcarComponent } from './addcar/addcar.component';
import { EditcarComponent } from './editcar/editcar.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: 'car/:id', component: CarComponent },
      { path: 'addcar', component: AddcarComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'editcar/:id', component: EditcarComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
