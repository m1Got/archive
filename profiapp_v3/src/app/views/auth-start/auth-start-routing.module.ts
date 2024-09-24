import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthStartPage } from './auth-start.page';

const routes: Routes = [
  {
    path: '',
    component: AuthStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthStartPageRoutingModule {}
