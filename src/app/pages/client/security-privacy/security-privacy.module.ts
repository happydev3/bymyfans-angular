import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityPrivacyRoutingModule } from './security-privacy-routing.module';
import { SecurityPrivacyComponent } from './security-privacy.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ManageShippingAddressComponent } from './manage-shipping-address/manage-shipping-address.component';

@NgModule({
  declarations: [SecurityPrivacyComponent, ManageShippingAddressComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SecurityPrivacyRoutingModule
  ]
})
export class SecurityPrivacyModule { }
