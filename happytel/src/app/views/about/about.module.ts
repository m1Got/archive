import { NgModule } from "@angular/core";

import { AboutComponent } from "./about.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "src/app/shared/translate/translate.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: AboutComponent }]),
    TranslateModule
  ],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule {}
