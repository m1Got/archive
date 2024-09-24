import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SimcardsPage } from "./simcards.page";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SubscribeDirective } from "@ngneat/subscribe";
import { TranslateComponent } from "src/app/shared/components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateComponent,
    SubscribeDirective,
    RouterModule.forChild([
      {
        path: "",
        component: SimcardsPage,
      },
    ]),
  ],
  declarations: [SimcardsPage],
})
export class SimcardsPageModule {}
