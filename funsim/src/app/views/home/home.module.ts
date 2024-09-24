import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SubscribeDirective } from "@ngneat/subscribe";

import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";
import { FilterByFieldPipe } from "src/app/core/pipes";
import { TariffsComponent, ArticleComponent } from "src/app/shared/components";
import { TranslateComponent } from "src/app/shared/components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NgOptimizedImage,
    TariffsComponent,
    SubscribeDirective,
    ArticleComponent,
    TranslateComponent,
    FilterByFieldPipe,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
      },
    ]),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
