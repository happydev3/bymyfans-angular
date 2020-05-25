import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileUserinfoComponent } from './profile-userinfo/profile-userinfo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProfileComponent, 
    ProfileUserinfoComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    MaterialModule
  ],
  entryComponents: [
    ProfileUserinfoComponent
  ]
})
export class ProfileModule { }
