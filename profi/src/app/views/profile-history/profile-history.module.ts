import { NgModule } from "@angular/core";

import { ProfileHistoryPage } from "./profile-history.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TaigaUIModule,
    RouterModule.forChild([{ path: "", component: ProfileHistoryPage }]),
  ],
  exports: [],
  declarations: [ProfileHistoryPage],
  providers: [],
})
export class ProfileHistoryModule {}
