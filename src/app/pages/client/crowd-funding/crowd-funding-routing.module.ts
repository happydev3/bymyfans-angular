import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrowdFundingComponent } from './crowd-funding.component';

const routes: Routes = [{ path: '', component: CrowdFundingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrowdFundingRoutingModule { }
