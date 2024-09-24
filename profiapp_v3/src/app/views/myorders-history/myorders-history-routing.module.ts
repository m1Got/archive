import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyordersHistoryPage } from './myorders-history.page';

const routes: Routes = [
  {
    path: '',
    component: MyordersHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyordersHistoryPageRoutingModule {}
