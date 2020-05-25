import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OtherProfileService } from 'src/app/services/other-profile.service';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html'
})
export class OtherProfileComponent implements OnInit {

  public userId: string;
  public posts: any;
  public isPost: boolean = false;
  public userInfo: any;
  public post_media_image: number;
  public post_media_video: number;
  public total_favorites: number;
  public total_likes: number;
  public total_post: number;
  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;
  public page = 1;

  constructor(
    private loadingService: LoadingService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public otherProfileService: OtherProfileService
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUserProfile(this.currentPage);
  }

  public getUserProfile(currentPage): void {
    let tempArr = [];
    this.loadingService.show();
    this.otherProfileService.getUserProfile(currentPage).subscribe((res) => {
      if(res.success == true) {
        if(res.data.post.data) {
          this.isPost = true;
        }
        res.data.post.data.map((post) => {
          tempArr.push({
            ...post,
            get_user: res.data.user_info
          })
        })
        this.posts = tempArr;
        this.userInfo = res.data.user_info;
        this.total_post = res.data.total_post;
        this.total_likes = res.data.total_likes;
        this.total_favorites = res.data.total_favorites;
        this.post_media_image = res.data.post_media_image;
        this.post_media_video = res.data.post_media_video;
        this.loadingService.hide();
      }
    })
  }

  pageChange(event) {
    const current = event.target.textContent;
    const page = current.replace("(current)", "");
    switch (page) {
      case '««':
        this.currentPage = 1;
        break;
      case '»»':
        this.currentPage = this.last_Page;
        break;
      case '«':
        this.currentPage = this.Currentpage - 1;
        if(this.currentPage < 1) {
          this.currentPage = 1;
        }
        break;
      case '»':
        this.currentPage = this.Currentpage + 1;
        if(this.currentPage > this.last_Page) {
          this.currentPage = this.last_Page;
        }
        break;
      default: 
        this.currentPage = page;
        break;
    }
    this.getUserProfile(this.currentPage);
  }

}
