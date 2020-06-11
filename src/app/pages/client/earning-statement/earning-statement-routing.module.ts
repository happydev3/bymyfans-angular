import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarningStatementComponent } from './earning-statement.component';

const routes: Routes = [{ path: '', component: EarningStatementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningStatementRoutingModule { }
