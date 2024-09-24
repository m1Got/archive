import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthCodePage } from './auth-code.page';

const routes: Routes = [
  {
    path: '',
    component: AuthCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthCodePageRoutingModule {}
