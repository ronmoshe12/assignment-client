import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // If using reactive forms
import { EditCarComponent } from './edit-car/edit-car.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {ButtonComponent} from "../shared/button/button.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [EditCarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: EditCarComponent}
    ]),
    MatCardModule
  ]
})
export class EditCarModule { }
