import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { PostService } from 'src/app/services/post.service';

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
  

  constructor(
    private loadingService: LoadingService,
    public postService: PostService,
  ) {
  }

  @Input() post: any;

  ngOnInit(): void {
    console.log(this.post);
    this.profileUrl = this.userPhotoUrl + '/' + this.post.get_user.profile_pic;
  }

  public postDetailOption(): void {
    console.log('click');
  }

  public postComment(event, postId): void {
    console.log('click', event, postId);
    this.postService.postComment(event.target.value, postId).subscribe((res) => {
      if(res.success == true) {
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
