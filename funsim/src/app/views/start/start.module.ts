import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StartPage } from "./start.page";
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
        component: StartPage,
      },
    ]),
  ],
  declarations: [StartPage],
})
export class StartPageModule {}
