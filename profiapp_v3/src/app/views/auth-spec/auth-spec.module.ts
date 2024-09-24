import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthSpecPageRoutingModule } from './auth-spec-routing.module';

import { AuthSpecPage } from './auth-spec.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaigaUIModule,
    ReactiveFormsModule,
    AuthSpecPageRoutingModule,
  ],
  declarations: [AuthSpecPage],
})
export class AuthSpecPageModule {}
