import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { BsComponentRef } from 'ngx-bootstrap/component-loader/bs-component-ref.class';
import { AuthContentComponent } from './components/auth-content/auth-content.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot() 
  ],
  declarations: [
    AuthNavbarComponent,
     AuthSidebarComponent,
     AuthContentComponent
  ],
  exports: [
    AuthNavbarComponent,
    AuthSidebarComponent,
    BsDropdownModule,
    AuthContentComponent
  ]
})
export class SharedsModule { }
