import { NgModule } from "@angular/core";

import { ProfilePersonalPage } from "./profile-personal.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    TaigaUIModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProfilePersonalPage,
      },
    ]),
  ],
  exports: [],
  declarations: [ProfilePersonalPage],
  providers: [],
})
export class ProfilePersonalModule {}
