import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthCityPageRoutingModule } from './auth-city-routing.module';

import { AuthCityPage } from './auth-city.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaigaUIModule,
    ReactiveFormsModule,
    AuthCityPageRoutingModule
  ],
  declarations: [AuthCityPage]
})
export class AuthCityPageModule {}
