import { NgModule } from "@angular/core";

import { FilterPerformersPage } from "./filter-performers.page";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PerformersComponent } from "src/app/shared/performers/performers.component";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "src/app/shared/search/search.component";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { RouterModule } from "@angular/router";
import { DownloadComponent } from "src/app/shared/download/download.component";

@NgModule({
  imports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    PerformersComponent,
    CommonModule,
    SearchComponent,
    DownloadComponent,
    TaigaUIModule,
    RouterModule.forChild([
      {
        path: "",
        component: FilterPerformersPage,
      },
    ]),
  ],
  exports: [],
  declarations: [FilterPerformersPage],
  providers: [],
})
export class FilterPerformersModule {}
