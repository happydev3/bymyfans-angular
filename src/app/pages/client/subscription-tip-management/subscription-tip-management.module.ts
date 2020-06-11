import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionTipManagementRoutingModule } from './subscription-tip-management-routing.module';
import { SubscriptionTipManagementComponent } from './subscription-tip-management.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SubscriptionTipManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SubscriptionTipManagementRoutingModule
  ]
})
export class SubscriptionTipManagementModule { }
