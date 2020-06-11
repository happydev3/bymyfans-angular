import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CallModalComponent } from 'src/app/shared/call-modal/call-modal.component';
import { TipModalComponent } from 'src/app/shared/tip-modal/tip-modal.component';

@Component({
  selector: 'app-subscription-element',
  templateUrl: './subscription-element.component.html'
})
export class SubscriptionElementComponent implements OnInit {

  @Input() subscription: any;
  public userPhotoUrl: String;
  public userWallUrl: String;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if(this.subscription.get_profile_info.profile_pic) {
      this.userPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic/' + this.subscription.get_profile_info.profile_pic;
    }
    if(this.subscription.get_profile_info.wall_pic) {
      this.userWallUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-wall-pic/' + this.subscription.get_profile_info.wall_pic;
    }
  }

  openCallModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    const dialogRef = this.dialog.open(CallModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openTipModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = this.subscription.get_profile_info;
    const dialogRef = this.dialog.open(TipModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
