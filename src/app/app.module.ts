import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AppRouting } from './app.routing';
import { SharedsModule } from './shareds/shareds.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    SharedsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
