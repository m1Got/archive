import { NgModule } from "@angular/core";

import { FavoritesPage } from "./favorites.page";
import { SearchComponent } from "src/app/shared/search/search.component";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PerformersComponent } from "src/app/shared/performers/performers.component";
import { RequestsComponent } from "src/app/shared/requests/requests.component";

@NgModule({
  imports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    PerformersComponent,
    RequestsComponent,
    CommonModule,
    SearchComponent,
    TaigaUIModule,
    RouterModule.forChild([
      {
        path: "",
        component: FavoritesPage,
      },
    ]),
  ],
  exports: [],
  declarations: [FavoritesPage],
  providers: [],
})
export class FavoritesModule {}
