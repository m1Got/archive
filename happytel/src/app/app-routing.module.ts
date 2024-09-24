import { NgModule, inject } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { filter, map } from "rxjs";

const canActiveAuth = () => {
  if (!inject(AuthService).isLoggedIn) {
    inject(Router).navigateByUrl("/");
    return false;
  }
  return true;
};

const canActiveAuth$ = () => {
  return inject(AuthService)
    .getIsLoggedIn$()
    .pipe(
      filter((isLoggedIn) => !!isLoggedIn),
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          inject(Router).navigateByUrl("/");
          return false;
        }
        return true;
      }),
    );
};

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "rates",
    loadChildren: () =>
      import("./views/rates/rates.module").then((m) => m.RatesModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./views/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "order",
    loadChildren: () =>
      import("./views/order/order.module").then((m) => m.OrderModule),
    canActivate: [canActiveAuth$],
  },
  {
    path: "profile",
    canActivate: [canActiveAuth$],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/profile/profile.module").then((m) => m.ProfileModule),
      },
      {
        path: "simcards",
        loadChildren: () =>
          import("./views/profile-simcards/profile-simcards.module").then(
            (m) => m.ProfileSimcardsModule,
          ),
      },
    ],
  },
  {
    path: "contacts",
    loadChildren: () =>
      import("./views/contacts/contacts.module").then((m) => m.ContactsModule),
  },
  {
    path: "faq",
    loadChildren: () =>
      import("./views/faq/faq.module").then((m) => m.FaqModule),
  },
  {
    path: "docs",
    loadChildren: () =>
      import("./views/docs/docs.module").then((m) => m.DocsModule),
  },
  {
    path: "news/:id",
    
    loadChildren: () =>
      import("./views/newsDetail/newsDetail.module").then(
        (m) => m.NewsDetailModule,
      ),
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
