import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { Action } from '@ngrx/store';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public actionLoadingIndicator = false;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public loadingService: LoadingService
  ) {
    this.loginForm= this.formBuilder.group({
      email: [''],
      password: [''],
      remember_me: null
    })
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        email   : ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
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
        this.loadingService.hide();
        localStorage.setItem('access_token', res.access_token)
        this.router.navigate(['/home']);
      }
    },(error) => {
      this.actionLoadingIndicator = false;
    })
  }
}
