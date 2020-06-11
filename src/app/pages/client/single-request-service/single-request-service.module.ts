import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRequestServiceRoutingModule } from './single-request-service-routing.module';
import { SingleRequestServiceComponent } from './single-request-service.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BidderListElementComponent } from './bidder-list-element/bidder-list-element.component';
import { BidModalComponent } from './bid-modal/bid-modal.component';


@NgModule({
  declarations: [SingleRequestServiceComponent, BidderListElementComponent, BidModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    SingleRequestServiceRoutingModule
  ]
})
export class SingleRequestServiceModule { }
