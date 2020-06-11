import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { PostService } from 'src/app/services/post.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostModalComponent } from 'src/app/shared/post-modal/post-modal.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html'
})
export class PostCardComponent implements OnInit {

  @ViewChild("videoPlayer", {static: false}) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';
  public postMediaUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/post-media';
  public profileUrl: string;
  public isOwnner: boolean = false; 
  public userID: any;
  

  constructor(
    private loadingService: LoadingService,
    public postService: PostService,
    public sharedService: SharedService,
    public dialog: MatDialog,
    public router: Router
  ) {
  }

  @Input() post: any;

  ngOnInit(): void {
    this.getUserID();
    this.profileUrl = this.userPhotoUrl + '/' + this.post.get_user.profile_pic;
  }

  public getUserID(): void {
    this.sharedService.getUserID().subscribe((res) => {
      if(res.success == true) {
        this.userID = res.data.user_info.id;
      }
    })
  }

  public postComment(event, postId): void {
    this.postService.postComment(event.target.value, postId).subscribe((res) => {
      if(res.success == true) {
        location.reload();
      }
    })
  }

  public deletePost(postID): void {
    this.loadingService.show();
    this.postService.deletePost(postID).subscribe((res) => {
      if(res.success == true) {
        this.loadingService.hide();
        location.reload();
      }
    })
  }

  public editPostModal(postID) {
    console.log(postID);
    let config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.panelClass = 'custom-modal'
    config.data = postID;
    const dialogRef = this.dialog.open(PostModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  public deleteComment(commentID, postID): void {
    this.loadingService.show();
    this.postService.deleteComment(commentID, postID).subscribe((res) => {
      if(res.success == true) {
        this.loadingService.hide();
        location.reload();
      }
    })
  }

  public like(postId): void {
    this.postService.addLike(postId, 1).subscribe((res) => {
      if(res.success == true) {
        console.log(res);
      }
    })
  }
}
