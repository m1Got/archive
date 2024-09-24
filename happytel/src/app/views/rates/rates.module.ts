import { NgModule } from "@angular/core";

import { RatesPage } from "./rates.page";
import { CommonModule } from "@angular/common";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "src/app/shared/translate/translate.module";
import { TariffModule } from "src/app/shared/tariff/tariff.module";
import { NgxPaginationModule } from "ngx-pagination";
import { NgForTrackByIdDirective } from "src/app/directives/trackById.directive";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TaigaUIModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: RatesPage }]),
    TranslateModule,
    TariffModule,
    NgxPaginationModule,
    NgForTrackByIdDirective,
  ],
  exports: [],
  declarations: [RatesPage],
  providers: [],
})
export class RatesModule {}
