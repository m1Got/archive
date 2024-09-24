import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyordersPageRoutingModule } from './myorders-routing.module';

import { MyordersPage } from './myorders.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyordersPageRoutingModule,
    TaigaUIModule,
    ReactiveFormsModule,
  ],
  declarations: [MyordersPage],
})
export class MyordersPageModule {}
