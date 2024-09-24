import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AuthPage } from "./auth.page";
import { RouterModule } from "@angular/router";
import { NgxMaskModule } from "ngx-mask";
import { TranslateComponent } from "src/app/shared/components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateComponent,
    ReactiveFormsModule,
    NgxMaskModule,
    NgOptimizedImage,
    RouterModule.forChild([
      {
        path: "",
        component: AuthPage,
      },
    ]),
  ],
  declarations: [AuthPage],
})
export class AuthPageModule {}
