import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertimagesPage } from './advertimages.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertimagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertimagesPageRoutingModule {}
