import { NgModule } from "@angular/core";

import { TariffComponent } from "./tariff.component";
import { CommonModule } from "@angular/common";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "../translate/translate.module";

@NgModule({
  imports: [CommonModule, TaigaUIModule, IonicModule, TranslateModule],
  exports: [TariffComponent],
  declarations: [TariffComponent],
  providers: [],
})
export class TariffModule {}
