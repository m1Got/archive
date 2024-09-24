import { NgModule } from "@angular/core";

import { FilterRequestsPage } from "./filter-requests.page";
import { RequestsComponent } from "src/app/shared/requests/requests.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
    RequestsComponent,
    CommonModule,
    SearchComponent,
    DownloadComponent,
    TaigaUIModule,
    RouterModule.forChild([
      {
        path: "",
        component: FilterRequestsPage,
      },
    ]),
  ],
  exports: [],
  declarations: [FilterRequestsPage],
  providers: [],
})
export class FilterRequestsModule {}
