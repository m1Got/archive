import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthPhonePage } from "./auth-phone.page";
import { IonicModule } from "@ionic/angular";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: AuthPhonePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TaigaUIModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [AuthPhonePage],
  providers: [],
})
export class AuthPhoneModule {}
