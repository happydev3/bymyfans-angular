import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockUsersRoutingModule } from './block-users-routing.module';
import { BlockUsersComponent } from './block-users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlockListElementComponent } from './block-list-element/block-list-element.component';


@NgModule({
  declarations: [BlockUsersComponent, BlockListElementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    BlockUsersRoutingModule
  ]
})
export class BlockUsersModule { }
