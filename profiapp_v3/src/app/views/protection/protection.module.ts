import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtectionPageRoutingModule } from './protection-routing.module';

import { ProtectionPage } from './protection.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaigaUIModule,
    ProtectionPageRoutingModule
  ],
  declarations: [ProtectionPage]
})
export class ProtectionPageModule {}
