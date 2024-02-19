import {HttpHeaders} from "@angular/common/http";

export interface RequestOptions {
  headers: HttpHeaders;
  params?: any;
}
