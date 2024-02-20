import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CarFormField} from "../../../forms/car-form-field.interface";


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  @Input() field!: CarFormField;
  @Input() form!: FormGroup;
}
