import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExecutorPageRoutingModule } from './executor-routing.module';

import { ExecutorPage } from './executor.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaigaUIModule,
    ExecutorPageRoutingModule,
  ],
  declarations: [ExecutorPage],
})
export class ExecutorPageModule {}
