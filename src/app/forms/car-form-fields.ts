import { Validators } from '@angular/forms';
import { CarFormField } from './car-form-field.interface';

export const CarFormFields: CarFormField[] = [
  {
    label: 'Vin',
    controlName: 'vin',
    validators: [Validators.required],
    type: 'text',
  },
  {
    label: 'Brand',
    controlName: 'brand',
    validators: [Validators.required],
    type: 'text',
  },
  {
    label: 'Model',
    controlName: 'model',
    validators: [Validators.required],
    type: 'text',
  },
  {
    label: 'Year',
    controlName: 'year',
    validators: [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())],
    type: 'number',
  },
  {
    label: 'Color',
    controlName: 'color',
    validators: [Validators.required],
    type: 'text',
  },
  {
    label: 'Mileage',
    controlName: 'mileage',
    validators: [Validators.required],
    type: 'number',
  },
];
