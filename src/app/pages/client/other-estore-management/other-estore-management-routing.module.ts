import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherEstoreManagementComponent } from './other-estore-management.component';

const routes: Routes = [{ path: '', component: OtherEstoreManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherEstoreManagementRoutingModule { }
