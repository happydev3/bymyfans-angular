import { Component, OnInit, Inject } from '@angular/core';
import { RequestForService } from 'src/app/services/request-for.service';
import { LoadingService } from 'src/app/services/loading.service';
import { DOCUMENT } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddRequestModalComponent } from './add-request-modal/add-request-modal.component';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html'
})
export class RequestServiceComponent implements OnInit {

  public requestServices: any;
  public page = 1;
  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;
  public categoryList: Array<Category> = [];

  constructor(
    public requestService: RequestForService,
    private loadingService: LoadingService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
    this.getRequestService(this.currentPage);
    this.getServiceCategory();
  }

  public getRequestService(currentPage): void {
    this.loadingService.show(); 
    this.requestService.getRequestService(currentPage).subscribe((res) => {
      if(res.success == true) {
        this.collectionSize = res.data.last_page * res.data.per_page;
        this.last_Page = res.data.last_page;
        this.Currentpage = res.data.current_page;
        this.requestServices = res.data.data;
      }
      this.loadingService.hide();
    })
  }

  public getServiceCategory(): void {
    this.requestService.getServiceCategory().subscribe((res) => {
      if(res.success == true) {
        this.categoryList = res.data;
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
    this.getRequestService(this.currentPage);
  }

  openDialog() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = this.categoryList;
    const dialogRef = this.dialog.open(AddRequestModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
