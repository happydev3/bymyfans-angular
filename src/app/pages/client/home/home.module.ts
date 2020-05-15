import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostCardModule } from 'src/app/shared/post-card/post-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    PostCardModule,
    CommonModule,
    HomeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
