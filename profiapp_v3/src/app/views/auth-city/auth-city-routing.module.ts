import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthCityPage } from './auth-city.page';

const routes: Routes = [
  {
    path: '',
    component: AuthCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthCityPageRoutingModule {}
