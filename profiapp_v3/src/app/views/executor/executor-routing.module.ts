import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExecutorPage } from './executor.page';

const routes: Routes = [
  {
    path: '',
    component: ExecutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecutorPageRoutingModule {}
