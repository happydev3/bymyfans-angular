import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { EstoreManagementService } from 'src/app/services/estore-management.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-other-estore-management',
  templateUrl: './other-estore-management.component.html'
})
export class OtherEstoreManagementComponent implements OnInit {

  public page = 1;
  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;

  public estoreManagementItems: any;
  public userId: string;

  constructor(
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute,
    private estoreManagementService: EstoreManagementService
  ) { }

  ngOnInit(): void {
    this.userId = btoa(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getOtherEstoreManagementItems(this.currentPage, this.userId);
  }

  public getOtherEstoreManagementItems(currentPage, userId): void{
    this.loadingService.show();
    this.estoreManagementService.getOtherEstoreManagementItems(currentPage, userId).subscribe((res) => {
      if(res.success == true) {
        this.estoreManagementItems = res.data.data;
      }
      this.loadingService.hide();
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
    this.getOtherEstoreManagementItems(this.currentPage, this.userId);
  }

}
