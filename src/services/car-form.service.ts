import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CarFormFields} from "../app/forms/car-form-fields";

@Injectable({
  providedIn: 'root'
})
export class CarFormService {

  constructor() {}

  createFormGroup(): FormGroup {
    const group: any = {};
    CarFormFields.forEach(field => {
      group[field.controlName] = new FormControl('', field.validators);
    });

    return new FormGroup(group);
  }
}
