import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditcarComponent } from './editcar/editcar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AddcarComponent } from './addcar/addcar.component';
import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddcarComponent,
    CarComponent,
    EditcarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
