import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from '../registration/registration.component';
import { SupportComponent } from '../support/support.component';
const routes: Routes = [
{
  path: '',
  component: RegistrationComponent
},
{
  path: 'test',
  component: SupportComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
