import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertcreatePageRoutingModule } from './advertcreate-routing.module';

import { AdvertcreatePage } from './advertcreate.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaigaUIModule,
    AdvertcreatePageRoutingModule,
  ],
  declarations: [AdvertcreatePage],
})
export class AdvertcreatePageModule {}
