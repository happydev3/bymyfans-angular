import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  resetForm: FormGroup;
  public email:string =  '';
  private _unsubscribeAll: Subject<any>;
  public token: string;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public loadingService: LoadingService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.resetForm = this.formBuilder.group({
      email: '',
      password: '',
      password_confirmation: ''
    });
    this._unsubscribeAll = new Subject();

    let isloggedIn = this.authService.isLoggedIn(); 
    if(isloggedIn == true) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    this.resetForm = this.formBuilder.group({
      email          : ['', [Validators.required, Validators.email]],
      password       : ['', Validators.required],
      password_confirmation: ['', [Validators.required, confirmPasswordValidator]]
    });

    this.resetForm.get('password').valueChanges
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(() => {
        this.resetForm.get('password_confirmation').updateValueAndValidity();
    });

    this.resetFind(this.token);
  }

  public resetFind(token): void {
    this.loadingService.show();
    this.authService.resetFind(token).subscribe((res) => {
      this.email = res.email;
    })
    this.loadingService.hide();
  }

  public resetPassword(): void {
    this.loadingService.show();
    let resetForm = {
      email: this.resetForm.value.email,
      password: this.resetForm.value.password,
      password_confirmation: this.resetForm.value.password_confirmation,
      token: this.token
    }
    this.authService.resetPassword(resetForm).subscribe((res) => {
      this.loadingService.hide();
      this.router.navigate(['/auth/login']);
    })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
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