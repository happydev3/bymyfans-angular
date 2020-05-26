import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

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
  // public postVideoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/post-video'
  public profileUrl: string; 
  

  constructor(
  ) {}

  @Input() post: any;

  ngOnInit(): void {
    console.log(this.post);
    this.profileUrl = this.userPhotoUrl + '/' + this.post.get_user.profile_pic;
  }

  public postDetailOption(): void {
    console.log('click');
  }

  openLikeToolTip() {
    
  }
}
