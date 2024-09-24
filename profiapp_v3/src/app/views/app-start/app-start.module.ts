import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppStartPageRoutingModule } from './app-start-routing.module';

import { AppStartPage } from './app-start.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppStartPageRoutingModule,
    TaigaUIModule
  ],
  declarations: [AppStartPage]
})
export class AppStartPageModule {}
