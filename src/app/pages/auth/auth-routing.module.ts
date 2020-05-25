import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


const authRoutes: Routes = [
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
      },
      { 
        path: 'reset-password/:token', 
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
