import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqPageRoutingModule } from './faq-routing.module';

import { FaqPage } from './faq.page';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqPageRoutingModule,
    ReactiveFormsModule,
    AccordionComponent,
    TaigaUIModule
  ],
  declarations: [FaqPage],
})
export class FaqPageModule {}
