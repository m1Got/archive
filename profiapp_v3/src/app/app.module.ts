import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TuiMobileDialogModule,
  TuiSheetDialogModule,
} from '@taiga-ui/addon-mobile';
import { TuiDialogHostModule } from '@taiga-ui/cdk';
import {
  PolymorpheusModule,
  POLYMORPHEUS_CONTEXT,
  PolymorpheusContent
} from '@tinkoff/ng-polymorpheus';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiSheetDialogModule,
    TuiMobileDialogModule,
    TuiDialogHostModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: POLYMORPHEUS_CONTEXT, useClass: PolymorpheusModule },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
