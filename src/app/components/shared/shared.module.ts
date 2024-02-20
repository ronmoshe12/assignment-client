import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormFieldComponent } from './form-field/form-field.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ButtonComponent,
    FormFieldComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,

  ],
  exports: [
    ButtonComponent,
    FormFieldComponent,

  ]
})
export class SharedModule {}
