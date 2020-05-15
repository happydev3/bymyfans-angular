import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  constructor() {}

  @Input() posts: any;
  public Posts: any;

  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';
  public postPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/post-media';

  ngOnInit(): void {
  }

  /** ng on changes */
  public ngOnChanges(): void {
    if (this.posts !== undefined) {
      this.Posts = this.posts.data;
      console.log(this.Posts);
    }
  }

  public postDetailOption(): void {
    console.log('click');
  }

}
