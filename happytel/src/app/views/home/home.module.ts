import { NgModule } from "@angular/core";

import { HomePage } from "./home.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { SwiperModule } from "swiper/angular";
import { TariffModule } from "src/app/shared/tariff/tariff.module";
import { TranslateModule } from "src/app/shared/translate/translate.module";
import { NgForTrackByIdDirective } from "src/app/directives/trackById.directive";

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    TranslateModule,
    SwiperModule,
    TaigaUIModule,
    TariffModule,
    ScrollingModule,
    NgForTrackByIdDirective,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: HomePage }]),
  ],
  exports: [],
  declarations: [HomePage],
  providers: [],
})
export class HomeModule {}
