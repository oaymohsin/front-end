import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { AdminLoginComponent } from './management-components/admin-management/admin-login/admin-login.component';
import { AdminRegisterComponent } from './management-components/admin-management/admin-register/admin-register.component';
import { UserLoginComponent } from './management-components/user-management/user-login/user-login.component';
import { UserRegisterComponent } from './management-components/user-management/user-register/user-register.component';


@NgModule({
  declarations: [
    ManagementComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
