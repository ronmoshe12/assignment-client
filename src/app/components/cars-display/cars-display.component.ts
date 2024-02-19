import { Component, OnInit } from '@angular/core';
import {Car, CarResponse} from "../../types/car.model";
import {CardButton} from "../../types/card-button.model";
import {CarsService} from "../../../services/cars.service";
import {Router} from "@angular/router";
import {ROUTE_PATHS} from "../../constants/route-constants";

@Component({
  selector: 'app-cars-display',
  templateUrl: './cars-display.component.html',
  styleUrls: ['./cars-display.component.scss']
})
export class CarsDisplayComponent implements OnInit {
  cars: Car[] | undefined;
  totalCars: number = 0;

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchCars();

  }

  fetchCars(){
    this.carsService.getCars().subscribe((cars: CarResponse) => {
      this.cars = cars?.cars;
      this.totalCars = cars?.total;
    });
  }

  onDeleteCar(carId: string) {
    const originalCars = this.cars?.slice();
    this.cars = this.cars?.filter(car => car.id !== carId);
    this.totalCars = this.totalCars - 1;
    this.carsService.deleteCar(carId).subscribe({
      next: () => {
        console.log('Car deleted successfully');
      },
      error: (error) => {
        //revert
        this.cars = originalCars;
        this.totalCars = this.totalCars + 1;
      }
    });
  }

  onEditCar(car:Car) {
    console.log('Edit car', car);
    this.router.navigate([ROUTE_PATHS.EDIT_CAR], { state: { car: car } });
  }



}
