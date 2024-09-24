import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';
import { AngularYandexMapsModule } from "angular8-yandex-maps"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaigaUIModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule,
    OrderPageRoutingModule,
  ],
  declarations: [OrderPage],
})
export class OrderPageModule {}
