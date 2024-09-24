import { NgModule } from "@angular/core";

import { ProfileTariffsPage } from "./profile-tariffs.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TaigaUIModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: ProfileTariffsPage }]),
  ],
  exports: [],
  declarations: [ProfileTariffsPage],
  providers: [],
})
export class ProfileTariffsModule {}
