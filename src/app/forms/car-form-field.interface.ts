import { ValidatorFn } from '@angular/forms';

export interface CarFormField {
  label: string;
  controlName: string;
  validators: ValidatorFn[];
  type: 'text' | 'dropdown' | 'number';
}
