import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { DefaultsidenavModule } from './layouts/defaultsidenav/defaultsidenav.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    SharedModule,

    LayoutModule,
    DefaultsidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
