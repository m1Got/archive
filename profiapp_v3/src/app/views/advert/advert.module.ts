import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertPageRoutingModule } from './advert-routing.module';

import { AdvertPage } from './advert.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';
import Swiper from 'swiper';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaigaUIModule,
    ReactiveFormsModule,
    AdvertPageRoutingModule,
    SwiperModule,
  ],
  declarations: [AdvertPage],
})
export class AdvertPageModule {}
