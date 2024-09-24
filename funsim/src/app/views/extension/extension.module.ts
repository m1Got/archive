import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ExtensionPage } from "./extension.page";
import { RouterModule } from "@angular/router";
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
        component: ExtensionPage,
      },
    ]),
  ],
  declarations: [ExtensionPage],
})
export class ExtensionPageModule {}
