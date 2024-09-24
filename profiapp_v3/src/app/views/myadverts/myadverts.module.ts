import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyadvertsPageRoutingModule } from './myadverts-routing.module';

import { MyadvertsPage } from './myadverts.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyadvertsPageRoutingModule,
    TaigaUIModule
  ],
  declarations: [MyadvertsPage]
})
export class MyadvertsPageModule {}
