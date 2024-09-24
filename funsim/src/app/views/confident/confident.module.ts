import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ConfidentPage } from "./confident.page";
import { RouterModule } from "@angular/router";
import { TranslateComponent } from "src/app/shared/components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateComponent,
    RouterModule.forChild([
      {
        path: "",
        component: ConfidentPage,
      },
    ]),
  ],
  declarations: [ConfidentPage],
})
export class ConfidentPageModule {}
