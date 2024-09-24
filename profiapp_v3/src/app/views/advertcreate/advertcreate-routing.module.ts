import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertcreatePage } from './advertcreate.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertcreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertcreatePageRoutingModule {}
