import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLinkActive, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TaigaUIModule } from "../taiga-ui.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ProfileMainComponent } from "./profile-main/profile-main.component";

@NgModule({
  imports: [
    IonicModule,
    TaigaUIModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    ProfileMainComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    ProfileMainComponent,
  ],
  providers: [],
})
export class LayoutsModule {}
