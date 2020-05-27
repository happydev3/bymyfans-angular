import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { EstoreManagementService } from 'src/app/services/estore-management.service';
import { AddProductComponent } from 'src/app/shared/add-product/add-product.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-estore-management',
  templateUrl: './estore-management.component.html'
})
export class EstoreManagementComponent implements OnInit {

  public page = 1;
  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;

  public estoreManagementItems: any;

  constructor(
    public dialog: MatDialog,
    private loadingService: LoadingService,
    private estoreManagementService: EstoreManagementService
  ) { }

  ngOnInit(): void {
    this.getEstoreManagementItems(this.currentPage);
  }


  public getEstoreManagementItems(currentPage): void{
    this.loadingService.show();
    this.estoreManagementService.getEstoreManagementItems(currentPage).subscribe((res) => {
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
    this.getEstoreManagementItems(this.currentPage);
  }
  
  openAddProductModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    const dialogRef = this.dialog.open(AddProductComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

}
