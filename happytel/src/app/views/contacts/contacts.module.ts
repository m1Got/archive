import { NgModule } from "@angular/core";

import { ContactsPage } from "./contacts.page";
import { CommonModule } from "@angular/common";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { AngularYandexMapsModule } from "angular8-yandex-maps";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "src/app/shared/translate/translate.module";

@NgModule({
  imports: [
    CommonModule,
    TaigaUIModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule,
    TranslateModule,
    RouterModule.forChild([{ path: "", component: ContactsPage }]),
  ],
  exports: [],
  declarations: [ContactsPage],
  providers: [],
})
export class ContactsModule {}
