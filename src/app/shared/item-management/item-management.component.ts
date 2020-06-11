import { Component, OnInit, Input } from '@angular/core';
import { AddProductComponent } from 'src/app/shared/add-product/add-product.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoadingService } from 'src/app/services/loading.service';
import { EstoreManagementService } from 'src/app/services/estore-management.service';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html'
})
export class ItemManagementComponent implements OnInit {

  @Input() item: any;
  public productPhotoUrl: String;

  constructor(
    public dialog: MatDialog,
    private loadingService: LoadingService,
    private estoreManagementService: EstoreManagementService
  ) { }

  ngOnInit(): void {
    this.productPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/products/' + this.item.image; 
  }

  public edit_product(productID): void {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = productID;
    const dialogRef = this.dialog.open(AddProductComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
