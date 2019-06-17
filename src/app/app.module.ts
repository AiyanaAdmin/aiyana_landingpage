import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C01Component } from './c01.component/c01.component';
import { C02Component } from './c02.component/c02.component';
import { C03Component } from './c03.component/c03.component';
import { C04Component } from './c04.component/c04.component';
@NgModule({
  declarations: [
    AppComponent,
    C01Component,
    C02Component,
    C03Component,
    C04Component
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
