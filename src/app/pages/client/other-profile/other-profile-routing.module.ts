import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherProfileComponent } from './other-profile.component';

const routes: Routes = [{ path: '', component: OtherProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherProfileRoutingModule { }
