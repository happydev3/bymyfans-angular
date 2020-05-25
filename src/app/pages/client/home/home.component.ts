import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { pagination } from 'src/app/model/paginate';
import { TopView } from 'src/app/model/topView';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  public page = 1;
  public posts: any;
  public paginationValue: pagination;
  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;

  public topViews: Array<TopView>;

  constructor(
    public authService: AuthService,
    public postService: PostService,
    private loadingService: LoadingService,
    public sharedService: SharedService
  ) { }

  public actionLoadingIndicator = true;
  ngOnInit(): void {
    this.getAllPost(this.currentPage);
    this.getTopViews();
  }

  ngAfterContentInit() {
    
  }

  public getAllPost(currentPage): void {
    this.loadingService.show();
    this.postService.getAllPost(currentPage).subscribe((res) => {
      if (res.success) {
        this.loadingService.hide();
        this.posts = res.data.data;
        this.actionLoadingIndicator = false;
        this.collectionSize = res.data.last_page * res.data.per_page;
        this.last_Page = res.data.last_page;
        this.Currentpage = res.data.current_page;
      }
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

  pageChange(event) {
    console.log(event);
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
    this.getAllPost(this.currentPage);
  }
}
