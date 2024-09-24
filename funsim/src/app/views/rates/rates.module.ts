import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SubscribeDirective } from "@ngneat/subscribe";

import { TariffsComponent, TranslateComponent } from "src/app/shared/components";
import { RatesPage } from "./rates.page";
import { FilterByFieldPipe } from "src/app/core/pipes";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscribeDirective,
    TranslateModule,
    TariffsComponent,
    FilterByFieldPipe,
    TranslateComponent,
    RouterModule.forChild([
      {
        path: "",
        component: RatesPage,
      },
    ]),
  ],
  declarations: [RatesPage],
})
export class RatesPageModule {}
