import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import {SvgIconService} from "../services/svg-icon.service";
import {ICONS} from "./constants/icons";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './components/shared/footer/footer.component';
import { GeneralCardComponent } from './components/shared/general-card/general-card.component';
import {MatCardModule} from "@angular/material/card";
import { ButtonComponent } from './components/shared/button/button.component';
import { CarsDisplayComponent } from './components/cars-display/cars-display.component';
import {ToastrModule} from "ngx-toastr";
import {SharedModule} from "./components/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GeneralCardComponent,
    CarsDisplayComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private svgIconService: SvgIconService) {
    this.svgIconService.registerIcons(ICONS);
  }
}
