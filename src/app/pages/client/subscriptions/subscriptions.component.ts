import { Component, OnInit } from '@angular/core';
import { CallModalComponent } from 'src/app/shared/call-modal/call-modal.component';
import { LoadingService } from 'src/app/services/loading.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent implements OnInit {

  public page = 1;
  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;

  public subscriptions: any;
  public isExist: boolean = true;

  constructor(
    private loadingService: LoadingService,
    public subscriptionService: SubscriptionsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getSubscriptions(this.currentPage);
  }

  public getSubscriptions(currentPage): void{
    this.loadingService.show();
    this.subscriptionService.getSubscriptions(currentPage).subscribe((res) => {
      console.log(res);
      if(res.success == true) {
        console.log(res);
        if(res.data.data.length > 0) {
          this.subscriptions = res.data.data;
        } else {
          this.isExist = false;
        }
      } else if(res.success == false && res.message == 'subscription not found') {
        this.isExist = false;
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
    this.getSubscriptions(this.currentPage);
  }

}
