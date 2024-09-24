import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ContactsPage } from "./contacts.page";
import { RouterModule } from "@angular/router";
import { AngularYandexMapsModule } from "angular8-yandex-maps";
import {
  FeedbackComponent,
  TranslateComponent,
} from "src/app/shared/components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularYandexMapsModule,
    TranslateComponent,
    FeedbackComponent,
    RouterModule.forChild([
      {
        path: "",
        component: ContactsPage,
      },
    ]),
  ],
  declarations: [ContactsPage],
})
export class ContactsPageModule {}
