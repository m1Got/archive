import { NgModule } from "@angular/core";

import { PerformersDetailPage } from "./performers-detail.page";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SearchComponent } from "src/app/shared/search/search.component";
import { DownloadComponent } from "src/app/shared/download/download.component";
import { SwiperModule } from "swiper/angular";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TaigaUIModule,
    FormsModule,
    SwiperModule,
    SearchComponent,
    DownloadComponent,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: PerformersDetailPage,
      },
    ]),
  ],
  exports: [],
  declarations: [PerformersDetailPage],
  providers: [],
})
export class PerformersDetailModule {}
