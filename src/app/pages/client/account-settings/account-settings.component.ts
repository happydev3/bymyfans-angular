import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/model/user';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  edit_account: FormGroup;
  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';
  public userWallUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-wall-pic';
  public currentPage: number = 1;
  public userInfo: User;
  public about: string;
  public location: string;
  public taobao_wishlist_url: string;
  public email: string;
  public mobile: string;
  public profile_pic: any;
  public wall_pic: any;
  

  constructor(
    public formBuilder: FormBuilder,
    private loadingService: LoadingService,
    public profileService: ProfileService,
  ) {
    this.edit_account = this.formBuilder.group({
      name: '',
      about: '',
      location: '',
      taobao_wishlist_url: '',
      email: '',
      mobile: '',
    })
   }

  ngOnInit(): void {
    this.edit_account = this.formBuilder.group({
      name: ['', Validators.required],
      about: ['', Validators.required],
      location: ['', Validators.required],
      taobao_wishlist_url: [''],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
    });
    this.getProfile(this.currentPage)
  }


  public getProfile(currentPage): void {
    this.loadingService.show();
    this.profileService.getProfile(currentPage).subscribe((res) => {
      if(res.success == true) {
        this.userInfo = res.data.user_info;
        console.log(this.userInfo);
        this.loadingService.hide();
      }
    })
  }

  public editAccount(): void {
    this.loadingService.show();
    console.log("here is the uplaod image data", this.edit_account.value, this.profile_pic, this.wall_pic)
    this.profileService.editAccount(this.edit_account, this.profile_pic, this.wall_pic)
      .subscribe((res) => {
        if(res.success == true) {
          console.log(res);
          this.userInfo = res.data;
          this.loadingService.hide();
        }
    })
  }

  onProfileSelected(event) {
    if(event.target.files.length > 0) {
      this.profile_pic = event.target.files[0];
    }
  }

  onWallSelected(event) {
    if(event.target.files.length > 0) {
      this.wall_pic = event.target.files[0];
    }
  }
}
