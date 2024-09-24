import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddresscreatePage } from './addresscreate.page';

const routes: Routes = [
  {
    path: '',
    component: AddresscreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddresscreatePageRoutingModule {}
