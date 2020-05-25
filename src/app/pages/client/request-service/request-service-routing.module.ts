import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestServiceComponent } from './request-service.component';

const routes: Routes = [{ path: '', component: RequestServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestServiceRoutingModule { }
