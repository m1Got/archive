import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { OrderPage } from "./order.page";
import { TranslateComponent } from "src/app/shared/components";
import { NgxMaskModule } from "ngx-mask";
import { TranslateModule } from "@ngx-translate/core";
import { SubscribeDirective } from "@ngneat/subscribe";
import { AngularYandexMapsModule } from "angular8-yandex-maps";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateComponent,
    NgxMaskModule,
    TranslateModule,
    TranslateComponent,
    SubscribeDirective,
    ReactiveFormsModule,
    AngularYandexMapsModule,
    RouterModule.forChild([
      {
        path: "",
        component: OrderPage,
      },
    ]),
  ],
  declarations: [OrderPage],
})
export class OrderPageModule {}
