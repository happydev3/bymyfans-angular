import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [PostCardComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [PostCardComponent]
})
export class PostCardModule { }
