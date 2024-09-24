import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthSpecPage } from './auth-spec.page';

const routes: Routes = [
  {
    path: '',
    component: AuthSpecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthSpecPageRoutingModule {}
