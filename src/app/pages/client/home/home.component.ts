import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: any;
  
  constructor(
    public authService: AuthService,
    public postService: PostService
  ) { }


  ngOnInit(): void {
    this.getAllPost();
  }

  ngAfterContentInit() {
    
  }

  getAllPost() {
    this.postService.getAllPost().subscribe((res) => {
      if (res.success) {
        this.posts = res.data;
        console.log(this.posts);
      }
    })
  }
}
