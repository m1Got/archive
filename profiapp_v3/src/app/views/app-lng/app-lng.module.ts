import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppLngPageRoutingModule } from './app-lng-routing.module';

import { AppLngPage } from './app-lng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppLngPageRoutingModule
  ],
  declarations: [AppLngPage]
})
export class AppLngPageModule {}
