import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoreManagementRoutingModule } from './estore-management-routing.module';
import { EstoreManagementComponent } from './estore-management.component';


@NgModule({
  declarations: [EstoreManagementComponent],
  imports: [
    CommonModule,
    EstoreManagementRoutingModule
  ]
})
export class EstoreManagementModule { }
