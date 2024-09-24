import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExecutorordersPage } from './executororders.page';

const routes: Routes = [
  {
    path: '',
    component: ExecutorordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecutorordersPageRoutingModule {}
