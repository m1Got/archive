import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "auth-start",
    loadChildren: () =>
      import("./auth-start/auth-start.module").then(
        (m) => m.AuthStartPageModule
      ),
  },
  {
    path: "auth-reg",
    loadChildren: () =>
      import("./auth-reg/auth-reg.module").then((m) => m.AuthRegPageModule),
  },
  {
    path: "auth-confirm",
    loadChildren: () =>
      import("./auth-confirm/auth-confirm.module").then(
        (m) => m.AuthConfirmPageModule
      ),
  },
  {
    path: "qrcode",
    loadChildren: () =>
      import("./qrcode/qrcode.module").then((m) => m.QrcodePageModule),
  },
  {
    path: "detail",
    loadChildren: () =>
      import("./detail/detail.module").then((m) => m.DetailPageModule),
  },
  {
    path: "delivery",
    loadChildren: () =>
      import("./delivery/delivery.module").then((m) => m.DeliveryPageModule),
  },
  {
    path: "scan",
    loadChildren: () =>
      import("./scan/scan.module").then((m) => m.ScanPageModule),
  },
  {
    path: "success",
    loadChildren: () =>
      import("./success/success.module").then((m) => m.SuccessPageModule),
  },
  {
    path: "banner",
    loadChildren: () =>
      import("./banner/banner.module").then((m) => m.BannerPageModule),
  },
  {
    path: "advertise",
    loadChildren: () =>
      import("./advertise/advertise.module").then((m) => m.AdvertisePageModule),
  },
  {
    path: "datetime",
    loadChildren: () =>
      import("./datetime/datetime.module").then((m) => m.DatetimePageModule),
  },
  {
    path: "table",
    loadChildren: () =>
      import("./table/table.module").then((m) => m.TablePageModule),
  },
  {
    path: "myorders",
    loadChildren: () =>
      import("./myorders/myorders.module").then((m) => m.MyordersPageModule),
  },
  {
    path: "subscriptions",
    loadChildren: () =>
      import("./subscriptions/subscriptions.module").then(
        (m) => m.SubscriptionsPageModule
      ),
  },
  {
    path: "myorder",
    loadChildren: () =>
      import("./myorder/myorder.module").then((m) => m.MyorderPageModule),
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./payment/payment.module").then((m) => m.PaymentPageModule),
  },
  {
    path: "addcard",
    loadChildren: () =>
      import("./addcard/addcard.module").then((m) => m.AddcardPageModule),
  },
  {
    path: "address",
    loadChildren: () =>
      import("./address/address.module").then((m) => m.AddressPageModule),
  },
  {
    path: "addaddress",
    loadChildren: () =>
      import("./addaddress/addaddress.module").then(
        (m) => m.AddaddressPageModule
      ),
  },
  {
    path: "personal",
    loadChildren: () =>
      import("./personal/personal.module").then((m) => m.PersonalPageModule),
  },
  {
    path: "placed",
    loadChildren: () =>
      import("./placed/placed.module").then((m) => m.PlacedPageModule),
  },
  {
    path: "favorites",
    loadChildren: () =>
      import("./favorites/favorites.module").then((m) => m.FavoritesPageModule),
  },
  {
    path: "catalog",
    loadChildren: () =>
      import("./catalog/catalog.module").then((m) => m.CatalogPageModule),
  },
  {
    path: "feedback",
    loadChildren: () =>
      import("./feedback/feedback.module").then((m) => m.FeedbackPageModule),
  },
  {
    path: "awaiting",
    loadChildren: () =>
      import("./awaiting/awaiting.module").then((m) => m.AwaitingPageModule),
  },

  {
    path: "creditcards",
    loadChildren: () =>
      import("./creditcards/creditcards.module").then(
        (m) => m.CreditcardsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
