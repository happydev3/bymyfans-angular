import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneCallRoutingModule } from './one-call-routing.module';
import { OneCallComponent } from './one-call.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OneCallComponent],
  imports: [
    CommonModule,
    OneCallRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class OneCallModule { }
