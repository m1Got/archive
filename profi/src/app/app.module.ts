import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiDialogModule,
  TuiHintModule,
  TuiRootModule,
} from "@taiga-ui/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LayoutsModule } from "./layouts/layouts.module";
import { TuiInputPhoneInternationalModule } from "@taiga-ui/kit";
import { AngularYandexMapsModule } from "angular8-yandex-maps";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicModule.forRoot({ mode: "ios" }),
    HttpClientModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    LoadingBarRouterModule,
    TuiHintModule,
    TuiInputPhoneInternationalModule,
    LayoutsModule,
    AngularYandexMapsModule.forRoot({ apikey: "API_KEY", lang: "en_US" }),
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  // provideClientHydration()
  bootstrap: [AppComponent],
})
export class AppModule {}
