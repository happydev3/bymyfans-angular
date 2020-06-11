import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningStatementRoutingModule } from './earning-statement-routing.module';
import { EarningStatementComponent } from './earning-statement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [EarningStatementComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    EarningStatementRoutingModule
  ]
})
export class EarningStatementModule { }
