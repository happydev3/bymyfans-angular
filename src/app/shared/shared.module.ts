import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    SocialIconComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [
    SocialIconComponent,
    PostCardComponent
  ]
})
export class SharedModule { }
