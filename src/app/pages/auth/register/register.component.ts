import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  private _unsubscribeAll: Subject<any>;

  public actionLoadingIndicator = false;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public loadingService: LoadingService,
    private _snackBar: MatSnackBar
  ) {
    this.registerForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
    this._unsubscribeAll = new Subject();
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        name           : ['', Validators.required],
        email          : ['', [Validators.required, Validators.email]],
        password       : ['', Validators.required],
        password_confirmation: ['', [Validators.required, confirmPasswordValidator]]
    });

    this.registerForm.get('password').valueChanges
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(() => {
        this.registerForm.get('password_confirmation').updateValueAndValidity();
    });

    let isloggedIn = this.authService.isLoggedIn(); 
    if(isloggedIn == true) {
      this.router.navigate(['/home']);
    }
  }

   
  ngOnDestroy(): void {
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  registerUser() {
    this.loadingService.show();
    this.authService.register(this.registerForm.value).subscribe((res) => {
      if(res.access_token && res.message == "Successfully created user!") {
        this.registerForm.reset();
        this.openSnackBar();
        this.router.navigate(['auth/login']);
      }
      this.loadingService.hide();
    }, (error) => {
      this.loadingService.hide();
    })
  }

  openSnackBar() {
    this._snackBar.open('Registered successfully!', 'End now', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  if ( !control.parent || !control )
  {
      return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('password_confirmation');

  if ( !password || !passwordConfirm )
  {
      return null;
  }

  if ( passwordConfirm.value === '' )
  {
      return null;
  }

  if ( password.value === passwordConfirm.value )
  {
      return null;
  }

  return {passwordsNotMatching: true};
};