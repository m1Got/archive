import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { TabsPage } from "./tabs.page";
import { TranslateComponent } from "../shared/components";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../views/home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "about",
        loadChildren: () =>
          import("../views/about/about.module").then((m) => m.AboutPageModule),
      },
      {
        path: "rates",
        loadChildren: () =>
          import("../views/rates/rates.module").then((m) => m.RatesPageModule),
      },
      {
        path: "contacts",
        loadChildren: () =>
          import("../views/contacts/contacts.module").then(
            (m) => m.ContactsPageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../views/profile/profile.module").then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: "auth",
        loadChildren: () =>
          import("../views/auth/auth.module").then((m) => m.AuthPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateComponent,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
