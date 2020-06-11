import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleRequestServiceComponent } from './single-request-service.component';

const routes: Routes = [{ path: '', component: SingleRequestServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRequestServiceRoutingModule { }
