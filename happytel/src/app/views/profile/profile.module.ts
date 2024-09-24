import { NgModule } from "@angular/core";

import { ProfilePage } from "./profile.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SimcardModule } from "src/app/shared/simcard/simcard.module";
import { TranslateModule } from "src/app/shared/translate/translate.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TaigaUIModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SimcardModule,
    RouterModule.forChild([{ path: "", component: ProfilePage }]),
  ],
  exports: [],
  declarations: [ProfilePage],
  providers: [],
})
export class ProfileModule {}
