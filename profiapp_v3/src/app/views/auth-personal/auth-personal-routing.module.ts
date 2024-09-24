import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPersonalPage } from './auth-personal.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPersonalPageRoutingModule {}
