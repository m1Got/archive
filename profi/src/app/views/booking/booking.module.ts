import { NgModule } from "@angular/core";

import { BookingPage } from "./booking.page";
import { CommonModule } from "@angular/common";
import { FaqComponent } from "src/app/shared/faq/faq.component";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { SearchComponent } from "src/app/shared/search/search.component";
import { DownloadComponent } from "src/app/shared/download/download.component";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularYandexMapsModule } from "angular8-yandex-maps";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule,
    FaqComponent,
    TaigaUIModule,
    SearchComponent,
    DownloadComponent,
    RouterModule.forChild([
      {
        path: "",
        component: BookingPage,
      },
    ]),
  ],
  exports: [],
  declarations: [BookingPage],
  providers: [],
})
export class BookingPageModule {}
