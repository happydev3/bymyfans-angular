import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  public startpoint = 'https://bvmwebsolutions.com/bemyfans/public/';
  public authHeader = this.tokenService.authHeader();

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public tokenService: TokenService
    ) { }

  API_URL: string = this.startpoint + `api/auth/post`

  
  getAllPost(pagination): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/all?page=${pagination}`, { headers: this.authHeader}).pipe(
      map((res: any) => res),
      catchError(() => of('Error, get All post info'))
    )
  }

  addPost(postInfo): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/add`, postInfo, {headers: this.authHeader}).pipe(
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
