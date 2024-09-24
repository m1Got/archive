import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthLegalPage } from "./auth-legal.page";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AuthLegalPage,
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
  declarations: [AuthLegalPage],
  providers: [],
})
export class AuthLegalModule {}
