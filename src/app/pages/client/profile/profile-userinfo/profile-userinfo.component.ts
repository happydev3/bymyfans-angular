import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TipModalComponent } from 'src/app/shared/tip-modal/tip-modal.component';
import { CallModalComponent } from 'src/app/shared/call-modal/call-modal.component';
import { SubscriptionModalComponent } from 'src/app/shared/subscription-modal/subscription-modal.component';

@Component({
  selector: 'app-profile-userinfo',
  templateUrl: './profile-userinfo.component.html'
})
export class ProfileUserinfoComponent implements OnInit {

  @Input() userInfo: User;
  panelOpenState = false;


  public userPhotoUrl: String;
  

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic/' + this.userInfo.profile_pic;
  }


  openTipModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = this.userInfo;
    const dialogRef = this.dialog.open(TipModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openCallModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = this.userInfo;
    const dialogRef = this.dialog.open(CallModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openSubscription() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    const dialogRef = this.dialog.open(SubscriptionModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
