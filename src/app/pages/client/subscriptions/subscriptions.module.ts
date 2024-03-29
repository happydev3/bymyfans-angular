import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SubscriptionElementComponent } from './subscription-element/subscription-element.component';


@NgModule({
  declarations: [SubscriptionsComponent, SubscriptionElementComponent],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SubscriptionsModule { }
