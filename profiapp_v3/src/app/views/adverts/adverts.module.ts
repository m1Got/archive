import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsPageRoutingModule } from './adverts-routing.module';

import { AdvertsPage } from './adverts.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaigaUIModule,
    FormsModule,
    ReactiveFormsModule,
    AdvertsPageRoutingModule
  ],
  declarations: [AdvertsPage]
})
export class AdvertsPageModule {}
