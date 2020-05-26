import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetRoutingModule } from './forget-routing.module';
import { ForgetComponent } from './forget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ForgetComponent
  ],
  imports: [
    CommonModule,
    ForgetRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [

  ]
})
export class ForgetModule { }
