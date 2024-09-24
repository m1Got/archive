import { NgModule } from "@angular/core";
import { FooterLayout } from "./footer/footer.layout";
import { HeaderLayout } from "./header/header.layout";
import { TabsLayout } from "./tabs/tabs.layout";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "../taiga-ui.module";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { AuthLayout } from "./auth/auth.layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {} from "@maskito/core";
import { MaskitoModule } from "@maskito/angular";
import { LayoutsService } from "./layouts.service";
import { TranslateModule } from "../shared/translate/translate.module";
import { TranslateComponent } from "../shared/translate/translate.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TaigaUIModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [FooterLayout, HeaderLayout, TabsLayout, AuthLayout],
  declarations: [FooterLayout, HeaderLayout, TabsLayout, AuthLayout],
  providers: [],
})
export class LayoutsModule {}
