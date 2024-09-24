import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExecutorordersPageRoutingModule } from './executororders-routing.module';

import { ExecutorordersPage } from './executororders.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaigaUIModule,
    ExecutorordersPageRoutingModule
  ],
  declarations: [ExecutorordersPage]
})
export class ExecutorordersPageModule {}
