import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthStartPageRoutingModule } from './auth-start-routing.module';

import { AuthStartPage } from './auth-start.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    SwiperModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AuthStartPageRoutingModule,
  ],
  declarations: [AuthStartPage],
})
export class AuthStartPageModule {}
