import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseHistoryRoutingModule } from './purchase-history-routing.module';
import { PurchaseHistoryComponent } from './purchase-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [PurchaseHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PurchaseHistoryRoutingModule
  ]
})
export class PurchaseHistoryModule { }
