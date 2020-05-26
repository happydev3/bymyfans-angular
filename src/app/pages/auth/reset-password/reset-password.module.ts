import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ResetPasswordRoutingModule
  ]
})
export class ResetPasswordModule { }
