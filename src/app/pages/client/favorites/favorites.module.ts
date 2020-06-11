import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FavoriteElementComponent } from './favorite-element/favorite-element.component';
import { CreateGroupComponent } from './create-group/create-group.component';


@NgModule({
  declarations: [FavoritesComponent, FavoriteElementComponent, CreateGroupComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class FavoritesModule { }
