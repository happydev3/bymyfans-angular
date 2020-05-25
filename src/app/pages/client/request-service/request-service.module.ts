import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestServiceRoutingModule } from './request-service-routing.module';
import { RequestServiceComponent } from './request-service.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AddRequestModalComponent } from './add-request-modal/add-request-modal.component';
import { ElementRequestComponent } from './element-request/element-request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RequestServiceComponent,
    AddRequestModalComponent,
    ElementRequestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RequestServiceRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AddRequestModalComponent
  ]
})
export class RequestServiceModule { }
