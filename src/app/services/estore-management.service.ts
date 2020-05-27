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
export class EstoreManagementService {

  public startpoint = 'https://bvmwebsolutions.com/bemyfans/public/api/auth';
  public authHeader = this.tokenService.authHeader();

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public tokenService: TokenService,
  ) { }

  getEstoreManagementItems(pagination): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/my-estore?page=${pagination}`, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getOtherEstoreManagementItems(pagination, userId): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/estore/${userId}?${pagination}`, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  } 

  addProduct(formInfo: FormGroup, media: File): Observable<any> {
    let formData = new FormData();
    formData.append('name', formInfo.value.name);
    formData.append('shipping_days', formInfo.value.shipping_days);
    formData.append('amount', formInfo.value.amount);
    formData.append('shipping_charges', formInfo.value.shipping_charges);
    formData.append('description', formInfo.value.description);
    formData.append('media_file', media);
    return this.httpClient.post(`${this.startpoint}/estore/add_product`, formData, {headers: this.authHeader}).pipe(
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
