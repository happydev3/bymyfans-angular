import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser  } from "angularx-social-login";
import { LoadingService } from 'src/app/services/loading.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html'
})
export class SocialIconComponent implements OnInit {

  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(
    public router: Router,
    public loadingService: LoadingService,
    private authService: AuthService,
    public auth: AuthenticationService,
    private _snackBar: MatSnackBar,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.fbLibrary();
  }

  loginFB() {
    window['FB'].login((response) => {
        console.log('login response',response);
        if (response.authResponse) {
          window['FB'].api('/me', {
            fields: 'last_name, first_name, email'
          }, (userInfo) => {
 
            if(userInfo) {
              let social_login_form = {
                provider_user_id: userInfo.id,
                name: userInfo.first_name + ' ' + userInfo.last_name,
                email: userInfo.email
              }
              this.auth.socialLogin(social_login_form).subscribe((res) => {
                this.loadingService.show();
                console.log(res)
                if(res.data.token) {
                  localStorage.setItem('access_token', res.data.token);
                  this.document.location.href = 'https://bemyfans.bvmwebsolutions.com/home';
                } else if(res.success == false) {
                  this.openSnackBar(res.message);
                }
                this.loadingService.hide();
              });
              console.log(this.user);
            }
            console.log("user information");
            console.log(userInfo);
          });
           
        } else {
          console.log('User login failed');
        }
    }, {scope: 'email'});
  }


  fbLibrary() {
    (window as any).fbAsyncInit = function() {
      window['FB'].init({
        appId      : '2561422120625796',
        cookie     : true,
        xfbml      : true,
        version    : 'v7.0'
      });
      window['FB'].AppEvents.logPageView();
    };
 
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  openSnackBar(message) {
    this._snackBar.open(message, '', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
