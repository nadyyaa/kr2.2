import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car | undefined
  id: string;
  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'] 
    })
   }
  ngOnInit(): void {
    this.car = this.carService.getCar(this.id);
  }

}
