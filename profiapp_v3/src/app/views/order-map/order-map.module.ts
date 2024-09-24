import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderMapPageRoutingModule } from './order-map-routing.module';

import { OrderMapPage } from './order-map.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TaigaUIModule,
    AngularYandexMapsModule,
    OrderMapPageRoutingModule
  ],
  declarations: [OrderMapPage]
})
export class OrderMapPageModule {}
