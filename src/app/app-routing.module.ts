import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule)
      }
    ]
  }, 
  { 
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
