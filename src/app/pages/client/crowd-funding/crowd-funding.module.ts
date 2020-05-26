import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdFundingRoutingModule } from './crowd-funding-routing.module';
import { CrowdFundingComponent } from './crowd-funding.component';
import { ElementCrowdComponent } from './element-crowd/element-crowd.component';
import { AddFundingModalComponent } from './add-funding-modal/add-funding-modal.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
     CrowdFundingComponent,
     ElementCrowdComponent,
     AddFundingModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    CrowdFundingRoutingModule,
  ],
  entryComponents: [
    AddFundingModalComponent
  ]
})
export class CrowdFundingModule { }
