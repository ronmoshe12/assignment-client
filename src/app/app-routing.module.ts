import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsDisplayComponent} from "./components/cars-display/cars-display.component";
import {ROUTE_PATHS} from "./constants/route-constants";

const routes: Routes = [
  {
    path: '',
    component: CarsDisplayComponent
  },
  {
    path: ROUTE_PATHS.EDIT_CAR,
    loadChildren: () => import('./components/edit-car/edit-car.module').then(m => m.EditCarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
