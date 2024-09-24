import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyaddressPageRoutingModule } from './myaddress-routing.module';

import { MyaddressPage } from './myaddress.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyaddressPageRoutingModule,
    TaigaUIModule,
    ReactiveFormsModule,
  ],
  declarations: [MyaddressPage],
})
export class MyaddressPageModule {}
