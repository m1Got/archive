import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddresscreatePageRoutingModule } from './addresscreate-routing.module';

import { AddresscreatePage } from './addresscreate.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddresscreatePageRoutingModule,
    TaigaUIModule,
    ReactiveFormsModule,
    AngularYandexMapsModule
  ],
  declarations: [AddresscreatePage]
})
export class AddresscreatePageModule {}
