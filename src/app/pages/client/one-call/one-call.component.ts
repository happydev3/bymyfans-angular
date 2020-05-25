import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CallModalComponent } from 'src/app/shared/call-modal/call-modal.component';

@Component({
  selector: 'app-one-call',
  templateUrl: './one-call.component.html'
})
export class OneCallComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
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
}
