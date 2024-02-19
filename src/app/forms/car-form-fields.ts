import { Validators } from '@angular/forms';
import { CarFormField } from './car-form-field.interface';

export const CarFormFields: CarFormField[] = [
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
    validators: [Validators.required, Validators.min(0)],
    type: 'number',
  },
  {
    label: 'Engine Type',
    controlName: 'engine.type',
    validators: [Validators.required],
    type: 'text',
  },
  {
    label: 'Engine Displacement',
    controlName: 'engine.displacement',
    validators: [Validators.required],
    type: 'text',

  },
  {
    label: 'Fuel Type',
    controlName: 'engine.fuelType',
    validators: [Validators.required],
    type: 'text',
  },
];
