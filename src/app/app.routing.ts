import { Routes,RouterModule } from '@angular/router';
import { AppURL }from './app.url';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const RouterLink:Routes = [
    {path: '', redirectTo: AppURL.Login, pathMatch: 'full'},
    {path: AppURL.Login,component: LoginComponent },
    {path: AppURL.Register,component: RegisterComponent },
    {path: AppURL.Authen, loadChildren:'./authentication/authentication.module#AuthenticationModule'}
];
export const AppRouting = RouterModule.forRoot(RouterLink);