import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { ProfileBalancePage } from './profile-balance.page';
import { RouterModule } from '@angular/router';
import { TaigaUIModule } from 'src/app/taiga-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TaigaUIModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: ProfileBalancePage }])
  ],
  exports: [],
  declarations: [ProfileBalancePage],
  providers: [],
})
export class ProfileBalanceModule { }
