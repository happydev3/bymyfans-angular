import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from './token.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RequestForService {

  public startpoint = 'https://bvmwebsolutions.com/bemyfans/public/api/auth';
  public authHeader = this.tokenService.authHeader();

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public tokenService: TokenService
  ) { }

  API_URL: string = this.startpoint + '/service-requests';

  getRequestService(pagination): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/list?page=${pagination}`, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getServiceCategory(): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/service-category/list`, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  addRequestService(data: FormGroup, media: File): Observable<any> {
    let formData = new FormData();
    formData.append('title', data.value.title);
    formData.append('category_id', data.value.category_id);
    formData.append('expiry_date', data.value.expiry_date);
    formData.append('location', data.value.location);
    formData.append('budget', data.value.budget);
    formData.append('description', data.value.description);
    formData.append('media_file', media);
    return this.httpClient.post(`${this.API_URL}/add`, formData, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
