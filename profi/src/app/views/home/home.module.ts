import { NgModule } from "@angular/core";

import { HomePage } from "./home.page";
import { RouterModule, Routes } from "@angular/router";
import { RequestsComponent } from "src/app/shared/requests/requests.component";
import { PerformersComponent } from "src/app/shared/performers/performers.component";
import { IonicModule } from "@ionic/angular";
import { StoriesComponent } from "src/app/shared/stories/stories.component";
import { CommonModule } from "@angular/common";
import { SwiperModule } from "swiper/angular";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DownloadComponent } from "src/app/shared/download/download.component";
import { FaqComponent } from "src/app/shared/faq/faq.component";
import { SearchComponent } from "src/app/shared/search/search.component";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
];

@NgModule({
  imports: [
    IonicModule,
    FaqComponent,
    SwiperModule,
    CommonModule,
    TaigaUIModule,
    SearchComponent,
    StoriesComponent,
    DownloadComponent,
    RequestsComponent,
    PerformersComponent,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [HomePage],
  providers: [],
})
export class HomeModule {}
