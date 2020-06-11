import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionTipManagementComponent } from './subscription-tip-management.component';

const routes: Routes = [{ path: '', component: SubscriptionTipManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionTipManagementRoutingModule { }
