import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditcardsPage } from './creditcards.page';

const routes: Routes = [
  {
    path: '',
    component: CreditcardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditcardsPageRoutingModule {}
