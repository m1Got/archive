import { NgModule } from "@angular/core";

import { TranslateComponent } from "./translate.component";
import { CommonModule } from "@angular/common";
import { TranslateService } from "./translate.service";

@NgModule({
  imports: [CommonModule],
  exports: [TranslateComponent],
  declarations: [TranslateComponent],
  providers: [TranslateService],
})
export class TranslateModule {}
