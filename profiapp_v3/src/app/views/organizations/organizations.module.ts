import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationsPageRoutingModule } from './organizations-routing.module';

import { OrganizationsPage } from './organizations.page';
import { TaigaUIModule } from 'src/app/taiga-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaigaUIModule,
    FormsModule,
    ReactiveFormsModule,
    OrganizationsPageRoutingModule
  ],
  declarations: [OrganizationsPage]
})
export class OrganizationsPageModule {}
