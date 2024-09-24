import { NgModule } from "@angular/core";

import { OrderPage } from "./order.page";
import { CommonModule } from "@angular/common";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularYandexMapsModule } from "angular8-yandex-maps";
import { TariffModule } from "src/app/shared/tariff/tariff.module";

@NgModule({
  imports: [
    CommonModule,
    TaigaUIModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule,
    TariffModule,
    RouterModule.forChild([{ path: "", component: OrderPage }]),
  ],
  exports: [],
  declarations: [OrderPage],
  providers: [],
})
export class OrderModule {}
