import { NgModule, inject } from "@angular/core";
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from "@angular/router";
import { PersistanceService } from "./core/services";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/start/start.module").then((m) => m.StartPageModule),
    canActivate: [
      () =>
        inject(PersistanceService).get("lng")
          ? inject(Router).navigateByUrl("/tabs")
          : null,
    ],
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "personal",
    loadChildren: () =>
      import("./views/personal/personal.module").then(
        (m) => m.PersonalPageModule
      ),
  },
  {
    path: "order",
    loadChildren: () =>
      import("./views/order/order.module").then((m) => m.OrderPageModule),
  },
  {
    path: "simcards",
    loadChildren: () =>
      import("./views/simcards/simcards.module").then(
        (m) => m.SimcardsPageModule
      ),
  },
  {
    path: "extension",
    loadChildren: () =>
      import("./views/extension/extension.module").then(
        (m) => m.ExtensionPageModule
      ),
  },
  {
    path: "confident",
    loadChildren: () =>
      import("./views/confident/confident.module").then(
        (m) => m.ConfidentPageModule
      ),
  },
  {
    path: "offer",
    loadChildren: () =>
      import("./views/offer/offer.module").then((m) => m.OfferPageModule),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./views/settings/settings.module").then(
        (m) => m.SettingsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
