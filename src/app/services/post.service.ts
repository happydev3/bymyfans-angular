import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from './token.service';
import { FormGroup } from '@angular/forms';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';


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

  addPost(postInfo: FormGroup, mediaFiles: Array<File>): Observable<any> {
    let formData: any = new FormData();
    let estore_link: number = 0;
    let comments_open: number = 0;
    let checkPublic: number = 0;
    if(postInfo.value.estore_link == true) estore_link = 1;
    if(postInfo.value.comments_open == true) comments_open = 1;
    if(postInfo.value.public == true) checkPublic = 1;
    formData.append('content', postInfo.value.content);
    formData.append('estore_link', estore_link);
    formData.append('comments_open', comments_open);
    formData.append('public', checkPublic);
    formData.append('media', mediaFiles);
    return this.httpClient.post(`${this.API_URL}/add`, formData, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  addLike(postId: number, like: number): Observable<any> {
    console.log(postId, like);
    let formData: any = new FormData();
    formData.append('post_Id', postId);
    formData.append('like', like);
    return this.httpClient.post(`${this.API_URL}/like`, formData, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  postComment(comment: string, postId: number): Observable<any> {
    let formData: any = new FormData();
    formData.append('comments', comment);
    formData.append('post_id', postId);
    return this.httpClient.post(`${this.API_URL}/comment`, formData, {headers: this.authHeader}).pipe(
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
