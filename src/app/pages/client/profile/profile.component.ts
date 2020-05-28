import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/model/user';
import { SharedService } from 'src/app/services/shared.service';
import { PostModalComponent } from 'src/app/shared/post-modal/post-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

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

  public topViews: Array<User>;
  public topSubscribers: Array<User>;
  public userWallUrl: String;

  constructor(
    private loadingService: LoadingService,
    public profileService: ProfileService,
    public dialog: MatDialog,
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getProfile(this.currentPage);
    this.getTopViews();
    this.getTopSubscribers();
  }

  public getProfile(currentPage): void {
    let tempArr = [];
    this.loadingService.show();
    this.profileService.getProfile(currentPage).subscribe((res) => {
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
        if(this.userInfo.wall_pic !== null) {
          this.userWallUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-wall-pic/' + this.userInfo.wall_pic;
        }
      }
      this.loadingService.hide();
    })
  }

  public getTopViews(): void {
    this.loadingService.show();
    this.sharedService.getTopViews().subscribe((res) => {
      if (res.success) {
        this.topViews = res.data;
        console.log(this.topViews);
      }
    })
  }

  public getTopSubscribers(): void {
    this.loadingService.show();
    this.sharedService.getTopSubscribers().subscribe((res) => {
      if (res.success) {
        this.topSubscribers = res.data;
        console.log(this.topSubscribers);
      }
    })
  }


  openPostModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    const dialogRef = this.dialog.open(PostModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
    this.getProfile(this.currentPage);
  }
}
