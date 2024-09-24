import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLngPage } from './app-lng.page';

const routes: Routes = [
  {
    path: '',
    component: AppLngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppLngPageRoutingModule {}
