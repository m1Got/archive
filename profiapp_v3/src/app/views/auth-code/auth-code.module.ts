import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthCodePageRoutingModule } from './auth-code-routing.module';

import { AuthCodePage } from './auth-code.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    TaigaUIModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AuthCodePageRoutingModule
  ],
  declarations: [AuthCodePage]
})
export class AuthCodePageModule {}
