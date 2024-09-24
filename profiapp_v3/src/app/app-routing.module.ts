import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'app-start',
    loadChildren: () =>
      import('./views/app-start/app-start.module').then(
        (m) => m.AppStartPageModule,
      ),
  },
  {
    path: 'app-lng',
    loadChildren: () =>
      import('./views/app-lng/app-lng.module').then((m) => m.AppLngPageModule),
  },
  {
    path: 'auth-start',
    loadChildren: () =>
      import('./views/auth-start/auth-start.module').then(
        (m) => m.AuthStartPageModule,
      ),
  },
  {
    path: 'auth-phone',
    loadChildren: () =>
      import('./views/auth-phone/auth-phone.module').then(
        (m) => m.AuthPhonePageModule,
      ),
  },
  {
    path: 'auth-code',
    loadChildren: () =>
      import('./views/auth-code/auth-code.module').then(
        (m) => m.AuthCodePageModule,
      ),
  },
  {
    path: 'auth-personal',
    loadChildren: () =>
      import('./views/auth-personal/auth-personal.module').then(
        (m) => m.AuthPersonalPageModule,
      ),
  },
  {
    path: 'auth-city',
    loadChildren: () =>
      import('./views/auth-city/auth-city.module').then(
        (m) => m.AuthCityPageModule,
      ),
  },
  {
    path: 'auth-spec',
    loadChildren: () => import('./views/auth-spec/auth-spec.module').then( m => m.AuthSpecPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./views/favorites/favorites.module').then(
        (m) => m.FavoritesPageModule,
      ),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./views/notifications/notifications.module').then(
        (m) => m.NotificationsPageModule,
      ),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./views/store/store.module').then((m) => m.StorePageModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./views/category/category.module').then(
        (m) => m.CategoryPageModule,
      ),
  },
  {
    path: 'advert',
    loadChildren: () =>
      import('./views/advert/advert.module').then((m) => m.AdvertPageModule),
  },
  {
    path: 'organizations',
    loadChildren: () =>
      import('./views/organizations/organizations.module').then(
        (m) => m.OrganizationsPageModule,
      ),
  },
  {
    path: 'order-map',
    loadChildren: () =>
      import('./views/order-map/order-map.module').then(
        (m) => m.OrderMapPageModule,
      ),
  },
  {
    path: 'personal',
    loadChildren: () =>
      import('./views/personal/personal.module').then(
        (m) => m.PersonalPageModule,
      ),
  },
  {
    path: 'myorders',
    loadChildren: () =>
      import('./views/myorders/myorders.module').then(
        (m) => m.MyordersPageModule,
      ),
  },
  {
    path: 'myorders-history',
    loadChildren: () =>
      import('./views/myorders-history/myorders-history.module').then(
        (m) => m.MyordersHistoryPageModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./views/settings/settings.module').then(
        (m) => m.SettingsPageModule,
      ),
  },
  {
    path: 'protection',
    loadChildren: () =>
      import('./views/protection/protection.module').then(
        (m) => m.ProtectionPageModule,
      ),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./views/faq/faq.module').then((m) => m.FaqPageModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./views/support/support.module').then((m) => m.SupportPageModule),
  },
  {
    path: 'myadverts',
    loadChildren: () =>
      import('./views/myadverts/myadverts.module').then(
        (m) => m.MyadvertsPageModule,
      ),
  },
  {
    path: 'balance',
    loadChildren: () =>
      import('./views/balance/balance.module').then((m) => m.BalancePageModule),
  },
  {
    path: 'executor',
    loadChildren: () =>
      import('./views/executor/executor.module').then(
        (m) => m.ExecutorPageModule,
      ),
  },
  {
    path: 'advertimages',
    loadChildren: () =>
      import('./views/advertimages/advertimages.module').then(
        (m) => m.AdvertimagesPageModule,
      ),
  },
  {
    path: 'myaddress',
    loadChildren: () =>
      import('./views/myaddress/myaddress.module').then(
        (m) => m.MyaddressPageModule,
      ),
  },
  {
    path: 'addresscreate',
    loadChildren: () =>
      import('./views/addresscreate/addresscreate.module').then(
        (m) => m.AddresscreatePageModule,
      ),
  },
  {
    path: 'speciality',
    loadChildren: () =>
      import('./views/speciality/speciality.module').then(
        (m) => m.SpecialityPageModule,
      ),
  },
  {
    path: 'verification',
    loadChildren: () =>
      import('./views/verification/verification.module').then(
        (m) => m.VerificationPageModule,
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
