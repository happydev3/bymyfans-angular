import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tip-modal',
  templateUrl: './tip-modal.component.html'
})
export class TipModalComponent implements OnInit {

  public profileUrl: string;
  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.profileUrl = this.userPhotoUrl + '/' + this.data.profile_pic;
  }

}
