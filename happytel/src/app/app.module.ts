import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { IonicModule } from "@ionic/angular";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiLoaderModule,
} from "@taiga-ui/core";
import { PolymorpheusModule } from "@tinkoff/ng-polymorpheus";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AngularYandexMapsModule } from "angular8-yandex-maps";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutsModule } from "./layouts/layouts.module";
import { Interceptors } from "./services/interceptors";
import { TuiLetModule } from "@taiga-ui/cdk";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    HttpClientModule,
    TuiAlertModule,
    LoadingBarRouterModule,
    PolymorpheusModule,
    IonicModule.forRoot({ mode: "ios" }),
    AngularYandexMapsModule.forRoot({ apikey: "API_KEY", lang: "en_US" }),
    LayoutsModule,
    TuiLoaderModule,
    TuiLetModule,
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptors,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
