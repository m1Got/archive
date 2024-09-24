import { NgModule } from "@angular/core";

import { SimcardComponent } from "./simcard.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { TranslateModule } from "../translate/translate.module";

@NgModule({
  imports: [CommonModule, IonicModule, TaigaUIModule, TranslateModule],
  exports: [SimcardComponent],
  declarations: [SimcardComponent],
  providers: [],
})
export class SimcardModule {}
