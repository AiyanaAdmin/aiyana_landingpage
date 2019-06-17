import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C01Component } from './c01.component/c01.component';
import { C02Component } from './c02.component/c02.component';
import { C03Component } from './c03.component/c03.component';
@NgModule({
  declarations: [
    AppComponent,
    C01Component,
    C02Component,
    C03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
