import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherEstoreManagementRoutingModule } from './other-estore-management-routing.module';
import { OtherEstoreManagementComponent } from './other-estore-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [OtherEstoreManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    OtherEstoreManagementRoutingModule
  ]
})
export class OtherEstoreManagementModule { }
