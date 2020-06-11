import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFundingModalComponent } from './add-funding-modal/add-funding-modal.component';
import { CrowdFundingService } from 'src/app/services/crowd-funding.service';
import { Category } from 'src/app/model/category';
@Component({
  selector: 'app-crowd-funding',
  templateUrl: './crowd-funding.component.html'
})
export class CrowdFundingComponent implements OnInit {

  public crowdFunds: any;
  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;
  public page = 1;
  public categoryList: Array<Category>;

  constructor(
    private loadingService: LoadingService,
    public crowdFundService: CrowdFundingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCrowdFunding(this.currentPage);
    this.getFundingCategory();
  }

  public getCrowdFunding(currentPage): void {
    this.loadingService.show();
    this.crowdFundService.getCrowdFunding(currentPage).subscribe((res) => {
      if(res.success == true) {
        console.log(res.data);
        this.collectionSize = res.data.last_page * res.data.per_page;
        this.last_Page = res.data.last_page;
        this.Currentpage = res.data.current_page;
        this.crowdFunds = res.data.data;
      }
      this.loadingService.hide();
    })
  }

  public getFundingCategory(): void {
    this.crowdFundService.getFundingCategory().subscribe((res) => {
      if(res.success == true) {
        this.categoryList = res.data;
        console.log(this.categoryList);
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
    this.getCrowdFunding(this.currentPage);
  }

  openDialog() {
    let config = new MatDialogConfig();
    config.panelClass = 'custom-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = this.categoryList;
    const dialogRef = this.dialog.open(AddFundingModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
