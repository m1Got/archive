import { NgModule } from "@angular/core";

import { ProfileSpecialtyPage } from "./profile-specialty.page";
import { CommonModule } from "@angular/common";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    TaigaUIModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: ProfileSpecialtyPage }]),
  ],
  exports: [],
  declarations: [ProfileSpecialtyPage],
  providers: [],
})
export class ProfileSpecialtyModule {}
