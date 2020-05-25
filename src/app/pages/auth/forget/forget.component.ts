import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { Action } from '@ngrx/store';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ForgetComponent implements OnInit {

  public actionLoadingIndicator = false;
  resetRequestForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public loadingService: LoadingService,
    public authService: AuthService
  ) { 
    this.resetRequestForm = this.formBuilder.group({
      email: ['']
    })
  }

  ngOnInit(): void {
    this.resetRequestForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    let isloggedIn = this.authService.isLoggedIn();
    if(isloggedIn == true) {
      this.router.navigate(['/home']);
    }
  }


  public resetRequest() :void{
    const email = this.resetRequestForm.value;
    this.loadingService.show();
    this.authService.resetRequest(email).subscribe((res) => {
      if(res.message == 'We have e-mailed your password reset link!') {
        this.loadingService.hide();
      }
    });
  }
}
