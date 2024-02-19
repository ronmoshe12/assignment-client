import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Car, CarPayload} from "../../../types/car.model";
import {CarFormFields} from "../../../forms/car-form-fields";
import {Router} from "@angular/router";
import {CarsService} from "../../../../services/cars.service";


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {
  carForm: FormGroup | undefined;
  car: Car | undefined;
  carFormFields = CarFormFields;

  ngOnInit(): void {
    this.getCar();
    this.carForm = this.createFormGroup();
    this.patchFormValues();
  }

  constructor(private router: Router, private carsService: CarsService) {
  }

  getCar() {
    let params = history.state;
    if (!params?.car) {
      this.router.navigate(['']);
      return;
    } else {
      this.car = params.car;
    }
  }

  createFormGroup(): FormGroup {
    const group: any = {};
    CarFormFields.forEach(field => {
      group[field.controlName] = new FormControl('', field.validators);
    });

    return new FormGroup(group);
  }

  patchFormValues(): void {
    if (this.car) {
      this.carForm?.patchValue(this.car);
      this.carForm?.addControl('id', new FormControl(this.car.id));
    }
  }

  onSaveCar(): void {
    const carPayload: CarPayload = {
      car: this.carForm?.value
    }
    if (this.carForm?.valid) {
      this.carsService.editCar(carPayload).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }
}
