import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
   }

  ngOnInit(): void {
    let isloggedIn = this.authService.isLoggedIn();
    if(isloggedIn == true) {
      this.router.navigate(['/home']);
    }
  }

  registerUser() {
    this.authService.register(this.registerForm.value).subscribe((res) => {
      console.log(res);
      if(res.access_token && res.message == "Successfully created user!") {
        this.registerForm.reset()
        this.router.navigate(['auth/login']);
      }
    })
  }
}
