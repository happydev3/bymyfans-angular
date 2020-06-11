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
export class FavoritesService {

  public startpoint = 'https://bvmwebsolutions.com/bemyfans/public/api/auth';
  public authHeader = this.tokenService.authHeader();

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public tokenService: TokenService,
  ) { }


  getFavorites(pagination): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/my-favorites?page=${pagination}`, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  createGroup(category_form: FormGroup): Observable<any> {
    let formData = new FormData();
    formData.append('category_name', category_form.value.category);
    return this.httpClient.post(`${this.startpoint}/add_favourite_category`, formData, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getMyCategories(): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/my_favorites_category`, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  AddUserGroup(add_group_form: FormGroup): Observable<any> {
    let formData = new FormData();
    formData.append('user_id', add_group_form.value.user_id);
    formData.append('category_id', add_group_form.value.category_id);
    return this.httpClient.post(`${this.startpoint}/assign_favourite_category`, formData, {headers: this.authHeader}).pipe(
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
