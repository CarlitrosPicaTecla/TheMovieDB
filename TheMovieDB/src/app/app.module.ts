import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import {  HttpClientModule } from '@angular/common/http';
import { MaterialsImportModule } from './materials-import/materials-import.module';
import { ActorInfoComponent } from './components/actor-info/actor-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorListComponent,
    LoginComponent,
    AuthComponent,
    ActorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsImportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
