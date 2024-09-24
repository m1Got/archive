import { NgModule } from "@angular/core";

import { ProfileSimcards } from "./profile-simcards.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SimcardModule } from "src/app/shared/simcard/simcard.module";
import { TranslateModule } from "src/app/shared/translate/translate.module";

@NgModule({
  imports: [
    CommonModule,
    SimcardModule,
    TranslateModule,
    RouterModule.forChild([{ path: "", component: ProfileSimcards }]),
  ],
  exports: [],
  declarations: [ProfileSimcards],
  providers: [],
})
export class ProfileSimcardsModule {}
