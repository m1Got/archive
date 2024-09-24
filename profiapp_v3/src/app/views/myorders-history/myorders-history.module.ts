import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyordersHistoryPageRoutingModule } from './myorders-history-routing.module';

import { MyordersHistoryPage } from './myorders-history.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaigaUIModule,
    IonicModule,
    MyordersHistoryPageRoutingModule
  ],
  declarations: [MyordersHistoryPage]
})
export class MyordersHistoryPageModule {}
