import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car.service';


@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  carlist:Car[] = []  
  constructor(private carService: CarService, private router: Router) { }


  carForm: any = {
    name: '',
    model: '',
    price: '',
  }

  ngOnInit(): void {
  }

  FormSubmit(){
    const car1 :Car = { 
      brandName: this.carForm.name,
      modelName:  this.carForm.model,
      priceInRub:  this.carForm.price,
    }
    this.carService.addCar(car1);
    console.log(car1)
    this.router.navigate(['/cars']);
}

}
