import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from '../registration/registration.component';
import { SupportComponent      } from '../support/support.component';
import { ProfileComponent      } from '../profile/profile.component';
const routes: Routes = [
{
  path: 'home',
  component: AppComponent
},
{
  path: 'profile',
  component: ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
