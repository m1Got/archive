import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlacedPage } from './placed.page';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: PlacedPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PlacedPage],
})
export class PlacedPageModule {}
