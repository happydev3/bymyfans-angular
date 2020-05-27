import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityPrivacyComponent } from './security-privacy.component';

const routes: Routes = [{ path: '', component: SecurityPrivacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityPrivacyRoutingModule { }
