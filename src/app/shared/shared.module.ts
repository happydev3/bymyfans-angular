import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ActionLoadingComponent } from './action-loading/action-loading.component';
import { AtomSpinnerModule } from 'angular-epic-spinners';
import { PaginateComponent } from './paginate/paginate.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CallModalComponent } from './call-modal/call-modal.component';
import { TipModalComponent } from './tip-modal/tip-modal.component';
import { PersonalHeaderComponent } from './personal-header/personal-header.component';
import { TopViewComponent } from './top-view/top-view.component';
import { TopSubscribeComponent } from './top-subscribe/top-subscribe.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { ItemManagementComponent } from './item-management/item-management.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    SocialIconComponent,
    PostCardComponent,
    SpinnerComponent,
    ActionLoadingComponent,
    PaginateComponent,
    CallModalComponent,
    TipModalComponent,
    PersonalHeaderComponent,
    TopViewComponent,
    TopSubscribeComponent,
    BestSellingComponent,
    ItemManagementComponent,
    SalesOrderComponent,
    PostModalComponent,
    AddProductComponent,
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    CommonModule,
    AtomSpinnerModule,
    NgbModule,
    MaterialModule
  ],
  exports: [
    SocialIconComponent,
    PostCardComponent,
    SpinnerComponent,
    CallModalComponent,
    TipModalComponent,
    ActionLoadingComponent,
    PaginateComponent,
    PersonalHeaderComponent,
    TopViewComponent,
    TopSubscribeComponent,
    BestSellingComponent,
    ItemManagementComponent,
    SalesOrderComponent,
    NgbModule,
    PostModalComponent,
    AddProductComponent
  ],
  entryComponents: [
    CallModalComponent,
    TipModalComponent,
    PostModalComponent,
    AddProductComponent
  ]
})
export class SharedModule { }
