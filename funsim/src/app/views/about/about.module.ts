import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AboutPage } from "./about.page";
import { RouterModule } from "@angular/router";
import { ArticleComponent, TranslateComponent } from "src/app/shared/components";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateComponent,
    ArticleComponent,
    TranslateModule,
    RouterModule.forChild([
      {
        path: "",
        component: AboutPage,
      },
    ]),
  ],
  declarations: [AboutPage],
})
export class AboutPageModule {}
