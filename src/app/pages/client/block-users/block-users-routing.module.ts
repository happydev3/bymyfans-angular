import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockUsersComponent } from './block-users.component';

const routes: Routes = [{ path: '', component: BlockUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockUsersRoutingModule { }
