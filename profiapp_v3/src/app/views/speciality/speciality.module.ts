import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialityPageRoutingModule } from './speciality-routing.module';

import { SpecialityPage } from './speciality.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialityPageRoutingModule,
    ReactiveFormsModule,
    TaigaUIModule,
    AccordionComponent
  ],
  declarations: [SpecialityPage]
})
export class SpecialityPageModule {}
