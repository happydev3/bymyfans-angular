import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { ManageShippingAddressComponent } from './manage-shipping-address/manage-shipping-address.component';

@Component({
  selector: 'app-security-privacy',
  templateUrl: './security-privacy.component.html'
})
export class SecurityPrivacyComponent implements OnInit {

  security_privacy_form: FormGroup;
  public userInfo: User;
  public currentPage: number = 1;
  public hide_profile: boolean = false;
  public private_message_notification: boolean = false;
  public accept_call_from_others: boolean = false;
  public status_to_invisible: boolean = false;
  

  constructor(
    private loadingService: LoadingService,
    public profileService: ProfileService,
    public dialog: MatDialog,
    public formBuilder: FormBuilder
  ) {
    this.security_privacy_form = this.formBuilder.group({
      hide_profile: false,
      private_message_notification: false,
      accept_call_from_others: false,
      status_to_invisible: false
    })
   }

  ngOnInit(): void {
    this.security_privacy_form = this.formBuilder.group({
      hide_profile: [false, Validators.required],
      private_message_notification: [false, Validators.required],
      accept_call_from_others: [false, Validators.required],
      status_to_invisible: [false, Validators.required]
    })
    this.getProfile(this.currentPage);
  }

  public getProfile(currentPage): void {
    this.loadingService.show();
    this.profileService.getProfile(currentPage).subscribe((res) => {
      if(res.success == true) {
        this.userInfo = res.data.user_info;
        console.log(this.userInfo);
        if(this.userInfo.hide_profile == "1") this.hide_profile = true;
        if(this.userInfo.private_message_notification == "1") this.private_message_notification = true;
        if(this.userInfo.accept_call_from_others == "1") this.accept_call_from_others = true;
        if(this.userInfo.status_to_invisible == "1") this.status_to_invisible = true;
        this.loadingService.hide();
        console.log(this.hide_profile, this.private_message_notification, this.accept_call_from_others, this.status_to_invisible);
      }
    })
  }

  public editSecurityPrivacy(): void {
    this.loadingService.show();
    console.log(this.security_privacy_form.value);
    this.profileService.editSecurityPrivacy(this.security_privacy_form.value).subscribe((res) => {
      if(res.success == true) {
        console.log(res);
        this.userInfo = res.data;
        if(this.userInfo.hide_profile == "1") this.hide_profile = true;
        if(this.userInfo.private_message_notification == "1") this.private_message_notification = true;
        if(this.userInfo.accept_call_from_others == "1") this.accept_call_from_others = true;
        if(this.userInfo.status_to_invisible == "1") this.status_to_invisible = true;
      }
      this.loadingService.hide();
    })
  }

  editShippingAddress() {
    let config = new MatDialogConfig();
    config.panelClass = 'custom-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = this.userInfo.id;
    const dialogRef = this.dialog.open(ManageShippingAddressComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
