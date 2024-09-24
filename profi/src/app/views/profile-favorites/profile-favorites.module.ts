import { NgModule } from "@angular/core";

import { ProfileFavoritesPage } from "./profile-favorites.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PerformersComponent } from "src/app/shared/performers/performers.component";
import { TaigaUIModule } from "src/app/taiga-ui.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TaigaUIModule,
    PerformersComponent,
    RouterModule.forChild([
      {
        path: "",
        component: ProfileFavoritesPage,
      },
    ]),
  ],
  exports: [],
  declarations: [ProfileFavoritesPage],
  providers: [],
})
export class ProfileFavoritesModule {}
