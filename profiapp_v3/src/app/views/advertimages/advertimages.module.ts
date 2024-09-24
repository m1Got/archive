import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertimagesPageRoutingModule } from './advertimages-routing.module';

import { AdvertimagesPage } from './advertimages.page';
import { SwiperModule } from 'swiper/angular';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    AdvertimagesPageRoutingModule,
    TaigaUIModule,
    ReactiveFormsModule,
  ],
  declarations: [AdvertimagesPage],
})
export class AdvertimagesPageModule {}
