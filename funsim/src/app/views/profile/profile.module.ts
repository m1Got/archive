import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { ProfilePage } from "./profile.page";
import { TranslateModule } from "@ngx-translate/core";
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
        component: ProfilePage,
      },
    ]),
    TranslateModule,
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
