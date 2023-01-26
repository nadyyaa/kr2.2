import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface Car {
  id?: string;
  brandName: string;
  modelName: string;
  priceInRub: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars$: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([]);
  private cars: Car[]=[];
  baseUrl = 'https://krr2-6b07d-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {
    this.loadCars();
  }

  getCarsObs(){
    return this.cars$.asObservable();
  }

  loadCars(){
    this.http.get<Car[]>(`${this.baseUrl}/cars.json`)
    .pipe(
      map((response: { [key: string]: any }) => {
        if(!response){
          return [];
        }
        return Object.keys(response).map((key) => ({
          ...response[key],
          id: key,
        }));
      })
    ).subscribe((carlist) => {
      this.cars$.next(Object.values(carlist));
    });
  }

  addCar(car: Car){
    this.http.post<Car>(`${this.baseUrl}/cars.json`, car).subscribe(() => {
      this.loadCars();
    });
  }

  getCar(id: string){
    return this.cars$.getValue()!.find(car => car.id === id);
  }

  delCar(id: string){
    //this.cars.splice(this.cars.findIndex(a => a.id === id) , 1);
    this.http.delete(`${this.baseUrl}/cars/${id}.json`).subscribe(() => {
      this.loadCars();
    });
  }

  editCar(car : Car){
    this.http.put<Car>(`${this.baseUrl}/cars/${car.id}.json`, car).subscribe(() => {
      this.loadCars();
    });
  }

}