import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public startpoint = 'https://bvmwebsolutions.com/bemyfans/public/';
  public authHeader = this.tokenService.authHeader();

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public tokenService: TokenService
  ) { }

  API_URL: string = this.startpoint + `api/auth`;

  getTopViews(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/top_viewer_profiles`, { headers: this.authHeader}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getTopSubscribers(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/top_subscribers_profiles`, { headers: this.authHeader}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getUserID(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/user`, {headers: this.authHeader}).pipe(
     map((res: Response) => {
       return res || {}
     }),
     catchError(this.handleError)
    )
  }

  addFavorite(userID: any, status: any): Observable<any> {
    let formData = new FormData();
    formData.append('user_id', userID);
    formData.append('status', status);
    return  this.httpClient.post(`${this.API_URL}/add_to_favourite`, formData, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        return res || {}
      })
    )
  }

  addBlocklist(blocked_user_id): Observable<any> {
    let formData = new FormData();
    formData.append('blocked_user_id', blocked_user_id);
    return  this.httpClient.post(`${this.API_URL}/add_to_blocklist`, formData, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        return res || {}
      })
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
