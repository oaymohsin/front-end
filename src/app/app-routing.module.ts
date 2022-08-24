import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: '', loadChildren: () => import('./Main-module/main/main.module').then(m => m.MainModule) },
  { path: 'admin', loadChildren: () => import('./Admin-module/admin/admin.module').then(m => m.AdminModule) },
 { path: 'main', loadChildren: () => import('./Main-module/main/main.module').then(m => m.MainModule) },
  { path: 'management', loadChildren: () => import('./Management-module/management/management.module').then(m => m.ManagementModule) },
   { path: 'user', loadChildren: () => import('./user-module/user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
