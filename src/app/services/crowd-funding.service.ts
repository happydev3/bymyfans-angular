import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CrowdFundingService {

  public startpoint = 'https://bvmwebsolutions.com/bemyfans/public/api/auth';
  public authHeader = this.tokenService.authHeader();

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public tokenService: TokenService
  ) { }

  API_URL: string = this.startpoint + '/crowd-funding';

  getCrowdFunding(pagination): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/list?page=${pagination}`, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getFundingCategory(): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/crowd-funding-category/list`, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  addCrowdFund(data): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/add`, data, {headers: this.authHeader}).pipe(
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
