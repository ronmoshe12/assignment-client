import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {CarFormService} from "../../../services/car-form.service";
import {CarFormFields} from "../../forms/car-form-fields";
import {CarsService} from "../../../services/cars.service";
import {Router} from "@angular/router";
import {CarPayload} from "../../types/car.model";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {
  carForm: FormGroup | undefined;

  constructor(private carFormService: CarFormService, private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.carForm = this.carFormService.createFormGroup();
  }


  onSaveCar() {
    const carPayload: CarPayload = {
      car: this.carForm?.value
    }
    if (this.carForm?.valid) {
      this.carsService.addCar(carPayload).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }


  public readonly carFormFields = CarFormFields;
}
