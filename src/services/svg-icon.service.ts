import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {IconType} from "../app/types/icons.type";
import {MatIconRegistry} from "@angular/material/icon";

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  public registerIcons(icons:IconType[]): void {
    icons.forEach((icon: IconType) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
