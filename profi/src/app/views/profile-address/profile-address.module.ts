import { NgModule } from "@angular/core";

import { ProfileAddressPage } from "./profile-address.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { RouterModule } from "@angular/router";
import { AngularYandexMapsModule } from "angular8-yandex-maps";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    TaigaUIModule,
    ReactiveFormsModule,
    AngularYandexMapsModule,
    RouterModule.forChild([{ path: "", component: ProfileAddressPage }]),
  ],
  exports: [],
  declarations: [ProfileAddressPage],
  providers: [],
})
export class ProfileAddressModule {}
