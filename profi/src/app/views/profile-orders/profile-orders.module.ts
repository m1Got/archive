import { NgModule } from "@angular/core";

import { ProfileOrdersPage } from "./profile-orders.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TaigaUIModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProfileOrdersPage,
      },
    ]),
  ],
  exports: [],
  declarations: [ProfileOrdersPage],
  providers: [],
})
export class ProfileOrdersModule {}
