import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C01Component } from './c01.component/c01.component';
import { C02Component } from './c02.component/c02.component';
import { C03Component } from './c03.component/c03.component';
import { C04Component } from './c04.component/c04.component';
import { GridBoxComponent } from './c04.component/elements/grid-box.component/grid-box.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { C05Component } from './c05.component/c05.component';
import { TimelineItemComponent } from './c05.component/elements/timeline-item.component/timeline-item.component';
@NgModule({
  declarations: [
    AppComponent,
    C01Component,
    C02Component,
    C03Component,
    C04Component,
    GridBoxComponent,
    C05Component,
    TimelineItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
