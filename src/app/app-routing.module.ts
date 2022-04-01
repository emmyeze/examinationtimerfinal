import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BootstrapnavComponent } from './layouts/bootstrapnav/bootstrapnav.component';
import { DefaultsidenavComponent } from './layouts/defaultsidenav/defaultsidenav.component';
import { HomeComponent } from './topview/home/home.component';

const routes: Routes = [


{path: '',
  // component: BootstrapnavComponent,

  component: DefaultsidenavComponent,
  children: [
    { path: '', component: HomeComponent }





  ]

}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
