import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      { 
        path: 'login', 
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
      }, 
      { 
        path: 'register', 
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) 
      },
      { 
        path: 'forget', 
        loadChildren: () => import('./forget/forget.module').then(m => m.ForgetModule) 
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
