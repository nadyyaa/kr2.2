import { Component, OnInit } from '@angular/core';
import { Car } from '../car.service';
import { Observable } from 'rxjs';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carlist: Observable<Car[]>;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.loadCars();
    this.carlist = this.carService.getCarsObs();
  }

  deletecar(id: string){
    this.carService.delCar(id);
  }

}
