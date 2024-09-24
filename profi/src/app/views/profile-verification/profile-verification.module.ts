import { NgModule } from "@angular/core";

import { ProfileVerificationPage } from "./profile-verification.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    TaigaUIModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: ProfileVerificationPage }]),
  ],
  exports: [],
  declarations: [ProfileVerificationPage],
  providers: [],
})
export class ProfileVerificationModule {}
