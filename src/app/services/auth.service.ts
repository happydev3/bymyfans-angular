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

  public startpoint = 'https://bvmwebsolutions.com/bemyfans/public/api';
  
  constructor(private httpClient: HttpClient,public router: Router){}

  register(user): Observable<any> {
    console.log(user);
    return this.httpClient.post(`${this.startpoint}/auth/signup`, user).pipe(
      map((res: Response) => {
        return res || {}
      }),
      (error) => {
        return error;
      }
    )
  }

  login(user): Observable<any> {
    return this.httpClient.post<any>(`${this.startpoint}/auth/login`, user).pipe(
      map((res: any) => {
        console.log(res);
        return res || {}
      }, (error) => {
        return error;
      })
    )    
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['/auth/login']);
    }
  }

  getUserProfile(token): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    console.log(headers);
    return this.httpClient.get(`${this.startpoint}/auth/user`, { headers: headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  resetRequest(email): Observable<any> {
    console.log(email);
    return this.httpClient.post(`${this.startpoint}/password/create`, email).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    );
  }

  resetFind(token): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/password/find/` + token).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  resetPassword(resetForm): Observable<any> {
    return this.httpClient.post(`${this.startpoint}/password/reset`, resetForm).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
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
