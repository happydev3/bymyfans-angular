import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoreManagementComponent } from './estore-management.component';

const routes: Routes = [{ path: '', component: EstoreManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoreManagementRoutingModule { }
