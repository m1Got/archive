import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditcardsPageRoutingModule } from './creditcards-routing.module';

import { CreditcardsPage } from './creditcards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditcardsPageRoutingModule
  ],
  declarations: [CreditcardsPage]
})
export class CreditcardsPageModule {}
