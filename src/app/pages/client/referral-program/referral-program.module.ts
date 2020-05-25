import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralProgramRoutingModule } from './referral-program-routing.module';
import { ReferralProgramComponent } from './referral-program.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [ReferralProgramComponent],
  imports: [
    CommonModule,
    ReferralProgramRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ReferralProgramModule { }
