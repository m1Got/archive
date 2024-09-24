import { NgModule } from "@angular/core";

import { DocsConfidentPage } from "./docs-confident.page";
import { DocsOfferPage } from "./docs-offer.page";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        children: [
          { path: "offer", component: DocsOfferPage },
          { path: "confident", component: DocsConfidentPage },
        ],
      },
    ]),
  ],
  exports: [],
  declarations: [DocsOfferPage, DocsConfidentPage],
  providers: [],
})
export class DocsModule {}
