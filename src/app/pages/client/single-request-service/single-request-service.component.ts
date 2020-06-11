import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { RequestForService } from 'src/app/services/request-for.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BidModalComponent } from './bid-modal/bid-modal.component';

@Component({
  selector: 'app-single-request-service',
  templateUrl: './single-request-service.component.html'
})
export class SingleRequestServiceComponent implements OnInit {
  
  public requestID: string;
  public singleSerivceInfo: any = null;
  public bidderList: any = null;
  
  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';
  public productPhotoUrl: String;

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestForService,
    public dialog: MatDialog,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.requestID = btoa(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getSingleService(this.requestID);
  }

  public getSingleService(requestID): void {
    this.loadingService.show();
    this.requestService.getSingleService(requestID).subscribe((res) => {
      console.log(res);
      if(res.success == true) {
        this.singleSerivceInfo = res.data.service_request_info;
        this.bidderList = res.data.bidder_list;
        this.productPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/products/' + this.singleSerivceInfo.media_file;
        console.log(this.singleSerivceInfo, this.bidderList)
        this.loadingService.hide();
      }
    })
  }

  public BidModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'custom-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = this.singleSerivceInfo.id;
    const dialogRef = this.dialog.open(BidModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
