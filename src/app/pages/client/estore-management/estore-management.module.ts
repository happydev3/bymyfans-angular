import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoreManagementRoutingModule } from './estore-management-routing.module';
import { EstoreManagementComponent } from './estore-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    EstoreManagementComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    EstoreManagementRoutingModule
  ]
})
export class EstoreManagementModule { }
