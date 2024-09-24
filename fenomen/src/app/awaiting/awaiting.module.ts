import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwaitingPageRoutingModule } from './awaiting-routing.module';

import { AwaitingPage } from './awaiting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwaitingPageRoutingModule
  ],
  declarations: [AwaitingPage]
})
export class AwaitingPageModule {}
