import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetRoutingModule } from './forget-routing.module';
import { ForgetComponent } from './forget.component';
import { SocialIconModule } from 'src/app/shared/social-icon/social-icon.module';


@NgModule({
  declarations: [
    ForgetComponent
  ],
  imports: [
    CommonModule,
    ForgetRoutingModule,
    SocialIconModule
  ],
  providers: [

  ]
})
export class ForgetModule { }
