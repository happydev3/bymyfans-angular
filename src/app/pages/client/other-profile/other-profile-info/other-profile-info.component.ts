import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TipModalComponent } from 'src/app/shared/tip-modal/tip-modal.component';
import { CallModalComponent } from 'src/app/shared/call-modal/call-modal.component';
import { SharedService } from 'src/app/services/shared.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-other-profile-info',
  templateUrl: './other-profile-info.component.html'
})
export class OtherProfileInfoComponent implements OnInit {

  @Input() userInfo: User;
  panelOpenState = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public userPhotoUrl: String;

  constructor(
    public dialog: MatDialog,
    public sharedService: SharedService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.userInfo.profile_pic) {
      if(this.userInfo.profile_pic !== null) {
        this.userPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic/' + this.userInfo.profile_pic;
      }
    }
  }
  
  public addFavorite(userID): void {
    this.sharedService.addFavorite(userID, 1).subscribe((res) => {
      if(res.success == true) {
        this.openSnackBar('Added user to Favorite list successfully!');
      }
    })
  }

  public addBlocklist(userID): void {
    this.sharedService.addBlocklist(userID).subscribe((res) => {
      if(res.success == true) {
        this.openSnackBar('Added user to Block list successfully!');
      }
    })
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

  openSnackBar(message) {
    this._snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}