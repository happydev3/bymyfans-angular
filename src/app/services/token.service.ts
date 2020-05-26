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
  
  postHeader() {
    let token = this.authService.getAccessToken();
    let postHeader = new HttpHeaders();
    postHeader.append('Authorization', 'Bearer ' + token);
    postHeader.append('Content-Type', 'multipart/form-data');
    return postHeader;
  }
}
