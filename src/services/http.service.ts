import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {catchError, Observable, tap, throwError} from "rxjs";
import {ToastrErrorMessages} from "../app/constants/toastr-error-messages";
import {ErrorResponseType} from "../app/types/error-response.type";
import {ToastrService} from "ngx-toastr";
import {RequestOptions} from "../app/types/requestOptions";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = environment.apiUrl;

  constructor(
    protected httpClient: HttpClient,
    public toastr: ToastrService,
  ) {
  }


  public getRequest<T>(type: string, params?: any): Observable<T | any> {
    const options: RequestOptions = {
      headers: this.buildHeaders(),
    };
    if (params) {
      options['params'] = params;
    }
    return this.httpClient
      .get<T>(`${this.apiUrl}/${type}`, options)
      .pipe(catchError(this.handleError.bind(this)));
  }

  putRequest<T>(
    endpoint: string,
    body: any,
    successMessage?: string
  ): Observable<T | any | ErrorResponseType> {
    const headers = this.buildHeaders();

    return this.httpClient
      .put<T>(`${this.apiUrl}/${endpoint}`, body, { headers })
      .pipe(
        tap(() => {
          if (successMessage) {
            this.toastr.success(successMessage);
          }
        }),
        catchError(this.handleError)
      );
  }

  deleteRequest<T>(
    endpoint: string,
    params?: any,
    successMessage?: string,
  ): Observable<T | any | ErrorResponseType> {
    const options = {
      headers: this.buildHeaders(),
      params: params
    };

    return this.httpClient
      .delete<T>(`${this.apiUrl}/${endpoint}`, options)
      .pipe(
        tap(() => {
          if (successMessage) {
            this.toastr.success(successMessage);
          }
        }),
        catchError(this.handleError)
      );
  }


  public getRequestWithParams<T>(type: string, params?: any): Observable<T | any> {
    const options: RequestOptions = {
      headers: this.buildHeaders(),
    };
    if (params) {
      options['params'] = params;
    }
    return this.httpClient
      .get<T>(`${this.apiUrl}/${type}`, options)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getRequestWithQueryParams<T>(type: string, params: any): Observable<T | any> {
    const options = {
      headers: this.buildHeaders(),
    };

    const queryParams = this.buildQueryParams(params);

    return this.httpClient
      .get<T>(`${this.apiUrl}/${type}?${queryParams}`, options)
      .pipe(catchError(this.handleError.bind(this)));
  }


  postRequest<T>(
    endpoint: string,
    body: Object,
    authorization?: string | null,
    successMessage?: string,
  ): Observable<T | any | ErrorResponseType> {
    let headers = this.buildHeaders();


    return this.httpClient
      .post<T>(`${this.apiUrl}/${endpoint}`, body, {headers})
      .pipe(
        tap(() => {
          if (successMessage) {
            this.toastr.success(successMessage);
          }
        }),
        catchError(this.handleError)
      );
  }


  formPostRequest<T>(
    endpoint: string,
    formData: FormData,
    authorization?: string | null,
    successMessage?: string,
  ): Observable<T | any | ErrorResponseType> {
    let headers = this.buildHeaders(true);
    return this.httpClient
      .post<T>(`${this.apiUrl}/${endpoint}`, formData, {headers})
      .pipe(
        tap(() => {
          if (successMessage) {
            this.toastr.success(successMessage);
          }
        }),
        catchError(this.handleError)
      );
  }


  protected buildHeaders(isFormData: boolean = false, additionalHeaders: {
    [header: string]: string | string[]
  } = {}): HttpHeaders {
    let headers = new HttpHeaders();

    // Set the content type
    if (!isFormData) {
      headers = headers.append('Content-Type', 'application/json');
    }

    // Append additional headers if provided
    for (const key of Object.keys(additionalHeaders)) {
      headers = headers.append(key, additionalHeaders[key]);
    }

    return headers;
  }

  private buildQueryParams(params: { [key: string]: any }): string {
    let queryParams = '';
    if (params)
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== undefined) {
          if (queryParams !== '') {
            queryParams += '&';
          }
          if (Array.isArray(params[key])) {
            const arrayParams = params[key] as Array<any>;
            arrayParams.forEach((value) => {
              queryParams += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
            });
          } else {
            queryParams += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
          }
        }
      });
    return queryParams;
  }

  public handleError = (response: HttpErrorResponse) => {
    let errorMessage: string = ToastrErrorMessages.DEFAULT;

    if (!response.status) {
      errorMessage = ToastrErrorMessages.NO_COMMUNICATION;
    } else if (response.status >= 400 && response.status < 500) {
      errorMessage = ToastrErrorMessages.INVALID_DETAILS;
    }
    this.toastr.error(errorMessage);

    let error = {
      status: response?.status,
      code: response?.error?.code,
      message: response?.message || '',
    };

    return throwError(error);
  };
}
