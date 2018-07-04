import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { NewUserComponent } from './components/user-management/new-user/new-user.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    SharedsModule
  ],
  declarations: [DashboardComponent, SettingComponent, ProfileComponent, UserManagementComponent, NewUserComponent]
})
export class AuthenticationModule { }
