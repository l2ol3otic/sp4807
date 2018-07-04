import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    SharedsModule
  ],
  declarations: [DashboardComponent]
})
export class AuthenticationModule { }
