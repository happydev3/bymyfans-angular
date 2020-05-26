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
export class ProfileService {

  public startpoint = 'https://bvmwebsolutions.com/bemyfans/public/api/auth';
  public authHeader = this.tokenService.authHeader();
  public postHeader = this.tokenService.postHeader();

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public tokenService: TokenService,
  ) { }

  API_URL: string = this.startpoint + '/user';

  getProfile(pagination): Observable<any> {
    return this.httpClient.get(`${this.API_URL}?page=${pagination}`, { headers: this.authHeader }).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  editAccount(accountInfo: FormGroup, profile: File, wall: File): Observable<any> {
    let formData = new FormData();
    formData.append('name', accountInfo.value.name);
    formData.append('about', accountInfo.value.about);
    formData.append('location', accountInfo.value.location);
    formData.append('taobao_wishlist_url', "");
    formData.append('email', accountInfo.value.email);
    formData.append('mobile', accountInfo.value.mobile);
    formData.append('profile_pic', profile);
    formData.append('wall_pic', wall);
    return this.httpClient.post(`${this.startpoint}/my-account/setting`, formData, { headers: this.authHeader }).pipe(
      map((res: Response) => {
        return res || {};
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
