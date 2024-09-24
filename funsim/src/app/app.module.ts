import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { AngularYandexMapsModule } from "angular8-yandex-maps";

import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthEffects } from "src/app/core/auth";

import { authFeatureKey, authReducer } from "src/app/core/auth/_reducer";
import { NgxMaskModule } from "ngx-mask";
import { InterceptorService } from "./core/services";

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    "./assets/i18n/",
    ".json?v=" + Date.now()
  );
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({
      [authFeatureKey]: authReducer,
      router: routerReducer,
    }),
    EffectsModule.forRoot(AuthEffects),
    IonicModule.forRoot({ mode: "ios" }),
    StoreRouterConnectingModule,
    AngularYandexMapsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot({ showMaskTyped: true }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
