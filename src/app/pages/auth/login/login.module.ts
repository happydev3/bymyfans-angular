import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SocialIconModule } from 'src/app/shared/social-icon/social-icon.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SocialIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class LoginModule { }
