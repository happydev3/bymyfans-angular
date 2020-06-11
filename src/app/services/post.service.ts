import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from './token.service';
import { FormGroup } from '@angular/forms';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { FileUploader } from 'ng2-file-upload';


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
    formData.append('content', postInfo.value.content);
    formData.append('estore_link', postInfo.value.estore_link == true ? 1 : 0);
    formData.append('comments_open', postInfo.value.comments_open == true ? 1 : 0);
    formData.append('public', postInfo.value.public == true ? 1 : 0);
    formData.append('for_favorites', postInfo.value.for_favorites == true ? 1 : 0);
    for (let i = 0; i < mediaFiles.length; i++) {
      formData.append('media[]', mediaFiles[i], mediaFiles[i].name);
    }
    return this.httpClient.post(`${this.API_URL}/add`, formData, {headers: this.authHeader}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  editPost(postInfo: FormGroup, mediaFiles: Array<File>, postID: number): Observable<any> {
    let formData: any = new FormData();
    formData.append('post_id', postID);
    formData.append('content', postInfo.value.content);
    formData.append('estore_link', postInfo.value.estore_link == true ? 1 : 0);
    formData.append('comments_open', postInfo.value.comments_open == true ? 1 : 0);
    formData.append('for_favorites', postInfo.value.for_favorites == true ? 1 : 0);
    formData.append('public', postInfo.value.public == true ? 1 : 0);
    for (let i = 0; i < mediaFiles.length; i++) {
      formData.append('media[]', mediaFiles[i], mediaFiles[i].name);
    }
    return this.httpClient.post(`${this.API_URL}/add`, formData, {headers: this.authHeader})
    .pipe(
        map((res: Response) => {
          return res || {}
        }),
      catchError(this.handleError)
    )
  }

  addLike(postId: number, like: number): Observable<any> {
    console.log(postId, like);
    let formData: any = new FormData();
    formData.append('post_id', postId);
    formData.append('like', like);
    return this.httpClient.post(`${this.API_URL}/like`, formData, {headers: this.authHeader})
    .pipe(
        map((res: Response) => {
          return res || {}
        }),
      catchError(this.handleError)
    )
  }

  postComment(comment: string, postId: number): Observable<any> {
    let formData: any = new FormData();
    formData.append('comments', comment);
    formData.append('post_id', postId);
    return this.httpClient.post(`${this.API_URL}/comment`, formData, {headers: this.authHeader})
    .pipe(
        map((res: Response) => {
          return res || {}
        }),
      catchError(this.handleError)
    )
  }

  deletePost(postID): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/delete`, {post_id :postID}, {headers: this.authHeader})
    .pipe(
        map((res: Response) => {
          return res || {}
        }),
      catchError(this.handleError)
    )
  }

  deleteComment(commentID: number, postID: number): Observable<any> {
    let formData: any = new FormData();
    formData.append('comments_id', commentID);
    formData.append('post_id', postID);
    return this.httpClient.post(`${this.API_URL}/comment/delete`, formData, {headers: this.authHeader})
    .pipe(
        map((res: Response) => {
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
