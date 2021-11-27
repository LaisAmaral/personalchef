import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./shared/login/login.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'signup', component: SignupComponent },
  //{ path: 'master', component: MasterComponent },
  //{ path: 'home', component: HomeComponent },
  //{ path: 'reports', component: ReportsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
