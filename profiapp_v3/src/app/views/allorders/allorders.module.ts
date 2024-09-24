import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllordersPageRoutingModule } from './allorders-routing.module';

import { AllordersPage } from './allorders.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaigaUIModule,
    AllordersPageRoutingModule
  ],
  declarations: [AllordersPage]
})
export class AllordersPageModule {}
