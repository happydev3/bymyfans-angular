import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from 'src/app/services/auth.service';
import { Action } from '@ngrx/store';
import { LoadingService } from 'src/app/services/loading.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public actionLoadingIndicator = false;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    public loadingService: LoadingService,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm= this.formBuilder.group({
      email: [''],
      password: [''],
      remember_me: [false]
    })
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        email   : ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        remember_me: [false]
    });

    let isloggedIn = this.authService.isLoggedIn();
    if(isloggedIn == true) {
      this.router.navigate(['/home']);
    }
  }
  
  loginUser() {
    this.loadingService.show();
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res) => {
      if(res.access_token) {
        localStorage.setItem('access_token', res.access_token)
        this.router.navigate(['/home']);
      } else if(res.success == false) {
        this.openSnackBar(res.message);
      }
      this.loadingService.hide();
    },(error) => {
      this.actionLoadingIndicator = false;
      this.loadingService.hide();
    })
  }

  openSnackBar(message) {
    this._snackBar.open(message, '', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
