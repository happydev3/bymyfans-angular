import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SocialIconModule } from 'src/app/shared/social-icon/social-icon.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule ,
    SocialIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule { }
