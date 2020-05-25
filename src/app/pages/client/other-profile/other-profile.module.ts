import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherProfileRoutingModule } from './other-profile-routing.module';
import { OtherProfileComponent } from './other-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { OtherProfileInfoComponent } from './other-profile-info/other-profile-info.component';

@NgModule({
  declarations: [OtherProfileComponent, OtherProfileInfoComponent],
  imports: [
    CommonModule,
    OtherProfileRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class OtherProfileModule { }
