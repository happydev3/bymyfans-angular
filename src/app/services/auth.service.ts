import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
 
export interface LoginContext {
  email: String;
  password: String;
  remember_me?: Boolean;
}

export interface RegisterContext {
  name: String;
  email: String;
  password: String;
  password_confirmation: String;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser = {};

  constructor(private httpClient: HttpClient,public router: Router){}

  register(user): Observable<any> {
    console.log(user);
    return this.httpClient.post(`api/auth/signup`, user).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  login(user) {
    return this.httpClient.post<any>(`api/auth/login`, user)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('access_token', res.access_token)
        this.router.navigate(['/home']);
      })
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['/auth/login']);
    }
  }

  getUserProfile(token): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    console.log(headers);
    return this.httpClient.get(`api/auth/user`, { headers: headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }


  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
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
