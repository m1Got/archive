import { NgModule } from "@angular/core";
import { AuthRolePage } from "./auth-role.page";
import { CommonModule } from "@angular/common";
import { TaigaUIModule } from "src/app/taiga-ui.module";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [
  {
    path: "",
    component: AuthRolePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TaigaUIModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [AuthRolePage],
  providers: [],
})
export class AuthRoleModule {}
