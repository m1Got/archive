import { NgModule } from "@angular/core";

import { ProfileAnnouncementPage } from "./profile-announcement.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    TaigaUIModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: ProfileAnnouncementPage }]),
  ],
  exports: [],
  declarations: [ProfileAnnouncementPage],
  providers: [],
})
export class ProfileAnnouncementModule {}
