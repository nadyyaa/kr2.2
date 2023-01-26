import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car.service';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit {
  car: Car | undefined
  id: string
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'] 
    })
   }

  carForm: Car = {
    brandName: '',
    modelName: '',
    priceInRub: 0,
  }

  FormSubmit(){
    console.log(this.carForm);
    this.carService.editCar(this.carForm);
    this.router.navigate(['/cars']);
  } 

  ngOnInit(): void {
    this.carService.loadCars();
    this.carService.getCarsObs().subscribe(() => {
      this.carForm = this.carService.getCar(this.id)!;
    });
  }

}
