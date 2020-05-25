import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateMessageComponent } from './private-message.component';

const routes: Routes = [{ path: '', component: PrivateMessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateMessageRoutingModule { }
