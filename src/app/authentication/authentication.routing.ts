import { Routes,RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { NewUserComponent } from './components/user-management/new-user/new-user.component';


const RouteLists:Routes = [
    {path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full'},
    {path: AuthURL.Dashboard, component:DashboardComponent},
    {path: AuthURL.Setting, component:SettingComponent},
    {path: AuthURL.Profile, component:ProfileComponent},
    {path: AuthURL.Users, component:UserManagementComponent},
    {path: AuthURL.Newusers, component:NewUserComponent}
  
];
export const AuthRouting = RouterModule.forChild(RouteLists);