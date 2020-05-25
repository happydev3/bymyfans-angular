import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneCallComponent } from './one-call.component';

const routes: Routes = [{ path: '', component: OneCallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneCallRoutingModule { }
