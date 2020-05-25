import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateMessageRoutingModule } from './private-message-routing.module';
import { PrivateMessageComponent } from './private-message.component';


@NgModule({
  declarations: [PrivateMessageComponent],
  imports: [
    CommonModule,
    PrivateMessageRoutingModule
  ]
})
export class PrivateMessageModule { }
