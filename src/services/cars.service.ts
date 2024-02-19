import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {CarPayload} from "../app/types/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  apiController = 'cars';

  constructor(private httpService: HttpService) { }

  getCars() {
    return this.httpService.getRequest(`${this.apiController}/get`);
  }

  deleteCar(id: string) {
    return this.httpService.deleteRequest(`${this.apiController}/delete/${id}`,undefined, "Car deleted successfully");
  }

  editCar(car: CarPayload) {
    return this.httpService.putRequest(`${this.apiController}/update`, car, "Car updated successfully");
  }
}
