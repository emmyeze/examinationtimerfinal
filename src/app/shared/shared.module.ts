import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppDisableDirective } from './directives/app-disable.directive';
import { MaterialModule } from '../material/material.module';
import { TimercontrolsComponent } from './timercontrols/timercontrols.component';

// @ts-ignore: Unreachable code error
// import {HighchartsChartModule} from 'highcharts-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TimercontrolsComponent,
    AppDisableDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
        // @ts-ignore: Unreachable code error

    // HighchartsChartModule,



  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    TimercontrolsComponent,
    AppDisableDirective,
  ]
})
export class SharedModule { }
