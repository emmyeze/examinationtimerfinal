import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BootstrapnavComponent } from './layouts/bootstrapnav/bootstrapnav.component';
import { DefaultsidenavComponent } from './layouts/defaultsidenav/defaultsidenav.component';
import { HomeComponent } from './topview/home/home.component';
import { SettingsComponent } from './topview/settings/settings.component';

const routes: Routes = [


{path: '',
  // component: BootstrapnavComponent,

  component: DefaultsidenavComponent,
  children: [
    { path: '', component: HomeComponent },

  {
    path: 'settings',
    component: SettingsComponent
},



  ]

}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
