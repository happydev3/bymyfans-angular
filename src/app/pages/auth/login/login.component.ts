import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm= this.formBuilder.group({
      email: [''],
      password: [''],
      remember_me: true
    })
  }

  ngOnInit(): void {
    let isloggedIn = this.authService.isLoggedIn();
    if(isloggedIn == true) {
      this.router.navigate(['/home']);
    }
  }

  loginUser() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
  }
}
