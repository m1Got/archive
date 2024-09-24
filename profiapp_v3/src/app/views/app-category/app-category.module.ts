import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCategoryPageRoutingModule } from './app-category-routing.module';

import { AppCategoryPage } from './app-category.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaigaUIModule,
    AccordionComponent,
    AppCategoryPageRoutingModule
  ],
  declarations: [AppCategoryPage]
})
export class AppCategoryPageModule {}
