import { NgModule } from "@angular/core";

import { FaqPage } from "./faq.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { AccordionComponent } from "src/app/shared/accordion/accordion.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AccordionComponent,
    RouterModule.forChild([{ path: "", component: FaqPage }]),
  ],
  exports: [],
  declarations: [FaqPage],
  providers: [],
})
export class FaqModule {}
