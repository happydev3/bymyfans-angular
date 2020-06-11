import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerSupportRoutingModule } from './customer-support-routing.module';
import { CustomerSupportComponent } from './customer-support.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [CustomerSupportComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CustomerSupportRoutingModule
  ]
})
export class CustomerSupportModule { }
