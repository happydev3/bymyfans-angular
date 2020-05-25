import { Component, OnInit, Input } from '@angular/core';
import { pagination } from 'src/app/model/paginate';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html'
})
export class PaginateComponent implements OnInit {

  page = 1;
  public currentPage: number;
  public collectionSize: number;
  @Input() public paginationValue;

  constructor(
    public postService: PostService
  ) { }

  ngOnInit(): void {
    console.log(this.paginationValue);
    this.collectionSize = this.paginationValue.last_page * this.paginationValue.per_page;
  }
  pageChange(event) {
    const current = event.target.innerText;
    this.currentPage = current.replace("(current)", "")
    console.log(this.currentPage);
    return this.postService.getAllPost(this.currentPage);
  }
}
