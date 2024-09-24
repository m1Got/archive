import { NgModule } from "@angular/core";

import { NewsDetailPage } from "./newsDetail.page";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TuiLoaderModule } from "@taiga-ui/core";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: NewsDetailPage }]),
    TuiLoaderModule
  ],
  exports: [],
  declarations: [NewsDetailPage],
  providers: [],
})
export class NewsDetailModule {}
