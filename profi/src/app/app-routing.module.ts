import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NgModule, inject } from "@angular/core";
import {
  RouteReuseStrategy,
  Router,
  RouterModule,
  Routes,
} from "@angular/router";
import { ProfileMainComponent } from "./layouts/profile-main/profile-main.component";
import { AuthService } from "./services/auth.service";
import { LOADING_BAR_CONFIG } from "@ngx-loading-bar/core";
import { IonicRouteStrategy } from "@ionic/angular";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "auth",
    children: [
      {
        path: "role",
        loadChildren: () =>
          import("./views/auth-role/auth-role.module").then(
            (m) => m.AuthRoleModule,
          ),
      },
      {
        path: "phone",
        loadChildren: () =>
          import("./views/auth-phone/auth-phone.module").then(
            (m) => m.AuthPhoneModule,
          ),
      },
      {
        path: "code",
        loadChildren: () =>
          import("./views/auth-code/auth-code.module").then(
            (m) => m.AuthCodeModule,
          ),
      },
      {
        path: "legal",
        loadChildren: () =>
          import("./views/auth-legal/auth-legal.module").then(
            (m) => m.AuthLegalModule,
          ),
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "role",
      },
    ],
  },
  {
    path: "favorites",
    loadChildren: () =>
      import("./views/favorites/favorites.module").then(
        (m) => m.FavoritesModule,
      ),
  },
  {
    path: "booking",
    loadChildren: () =>
      import("./views/booking/booking.module").then((m) => m.BookingPageModule),
  },
  {
    path: "filter",
    children: [
      {
        path: "performers",
        loadChildren: () =>
          import("./views/filter-performers/filter-performers.module").then(
            (m) => m.FilterPerformersModule,
          ),
      },
      {
        path: "requests",
        loadChildren: () =>
          import("./views/filter-requests/filter-requests.module").then(
            (m) => m.FilterRequestsModule,
          ),
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "performers",
      },
    ],
  },
  {
    path: "performers/detail/:slug",
    loadChildren: () =>
      import("./views/performers-detail/performers-detail.module").then(
        (m) => m.PerformersDetailModule,
      ),
  },
  {
    path: "profile",
    component: ProfileMainComponent,
    canActivate: [
      () => inject(AuthService).isLoggedIn || inject(Router).navigateByUrl("/"),
    ],
    canActivateChild: [
      () => inject(AuthService).isLoggedIn || inject(Router).navigateByUrl("/"),
    ],
    children: [
      {
        path: "personal",
        loadChildren: () =>
          import("./views/profile-personal/profile-personal.module").then(
            (m) => m.ProfilePersonalModule,
          ),
      },
      {
        path: "balance",
        loadChildren: () =>
          import("./views/profile-balance/profile-balance.module").then(
            (m) => m.ProfileBalanceModule,
          ),
      },
      {
        path: "tariffs",
        loadChildren: () =>
          import("./views/profile-tariffs/profile-tariffs.module").then(
            (m) => m.ProfileTariffsModule,
          ),
      },
      {
        path: "orders",
        loadChildren: () =>
          import("./views/profile-orders/profile-orders.module").then(
            (m) => m.ProfileOrdersModule,
          ),
      },
      {
        path: "favorites",
        loadChildren: () =>
          import("./views/profile-favorites/profile-favorites.module").then(
            (m) => m.ProfileFavoritesModule,
          ),
      },
      {
        path: "history",
        loadChildren: () =>
          import("./views/profile-history/profile-history.module").then(
            (m) => m.ProfileHistoryModule,
          ),
      },
      {
        path: "verification",
        loadChildren: () =>
          import(
            "./views/profile-verification/profile-verification.module"
          ).then((m) => m.ProfileVerificationModule),
      },
      {
        path: "announcement",
        loadChildren: () =>
          import(
            "./views/profile-announcement/profile-announcement.module"
          ).then((m) => m.ProfileAnnouncementModule),
      },
      {
        path: "address",
        loadChildren: () =>
          import("./views/profile-address/profile-address.module").then(
            (m) => m.ProfileAddressModule,
          ),
      },
      {
        path: "specialty",
        loadChildren: () =>
          import("./views/profile-specialty/profile-specialty.module").then(
            (m) => m.ProfileSpecialtyModule,
          ),
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "personal",
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
      scrollPositionRestoration: "enabled",
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
