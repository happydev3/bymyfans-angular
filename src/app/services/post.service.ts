import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public authService: AuthService
    ) { }

  API_URL: string = `api/auth/post`

  authHeader() {
    let token = this.authService.getAccessToken();
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
  
  getAllPost() {
    console.log(this.authHeader());
    return this.httpClient.get(`${this.API_URL}/all`, { headers: this.authHeader()}).pipe(
      map((res: any) => res),
      catchError(() => of('Error, get All post info'))
    )
  }
}
