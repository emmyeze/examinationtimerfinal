import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { DefaultsidenavComponent } from './defaultsidenav.component';
import { HomeComponent } from 'src/app/topview/home/home.component';

import { MatDividerModule } from '@angular/material/divider';
import { DashboardComponent } from 'src/app/topview/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DefaultsidenavComponent,
    HomeComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule, MatCardModule,
    MatGridListModule, MatMenuModule,
  ]
})
export class DefaultsidenavModule { }
