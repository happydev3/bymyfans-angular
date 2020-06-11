import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SpinnerComponent } from './spinner/spinner.component';
// import { ActionLoadingComponent } from './action-loading/action-loading.component';
import { AtomSpinnerModule } from 'angular-epic-spinners';
import { FlowerSpinnerModule } from 'angular-epic-spinners';
import { SemipolarSpinnerModule } from 'angular-epic-spinners';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

import { PaginateComponent } from './paginate/paginate.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective } from "ng2-file-upload";
import { Routes, RouterModule } from '@angular/router';

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
import { SubscriptionModalComponent } from './subscription-modal/subscription-modal.component';


let config = new AuthServiceConfig([
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  // },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2561422120625796")
  }
]);


export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    SocialIconComponent,
    PostCardComponent,
    SpinnerComponent,
    // ActionLoadingComponent,
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
    SubscriptionModalComponent,
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    CommonModule,
    AtomSpinnerModule,
    FlowerSpinnerModule,
    SemipolarSpinnerModule,
    NgxSpinnerModule,
    NgxImageGalleryModule,
    NgbModule,
    FileUploadModule,
    MaterialModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    SocialIconComponent,
    PostCardComponent,
    SpinnerComponent,
    CallModalComponent,
    TipModalComponent,
    // ActionLoadingComponent,
    PaginateComponent,
    PersonalHeaderComponent,
    TopViewComponent,
    TopSubscribeComponent,
    BestSellingComponent,
    ItemManagementComponent,
    SalesOrderComponent,
    NgbModule,
    FileUploadModule,
    TranslateModule,
    PostModalComponent,
    AddProductComponent,
    SubscriptionModalComponent
  ],
  entryComponents: [
    CallModalComponent,
    TipModalComponent,
    PostModalComponent,
    AddProductComponent,
    SubscriptionModalComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class SharedModule { }
