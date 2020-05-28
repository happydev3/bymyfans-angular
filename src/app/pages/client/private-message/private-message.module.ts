import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateMessageRoutingModule } from './private-message-routing.module';
import { PrivateMessageComponent } from './private-message.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  declarations: [PrivateMessageComponent],
  imports: [
    IconsModule,
    CommonModule,
    PickerModule,
    EmojiModule,
    PrivateMessageRoutingModule
  ]
})
export class PrivateMessageModule { }
