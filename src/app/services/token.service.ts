import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    public authService: AuthService
  ) { }

  authHeader() {
    let token = this.authService.getAccessToken();
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
  
}
