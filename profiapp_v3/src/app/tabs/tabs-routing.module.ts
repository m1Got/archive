import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../views/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'adverts',
        loadChildren: () =>
          import('../views/adverts/adverts.module').then(
            (m) => m.AdvertsPageModule,
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('../views/order/order.module').then((m) => m.OrderPageModule),
      },
      {
        path: 'advertcreate',
        loadChildren: () =>
          import('../views/advertcreate/advertcreate.module').then(
            (m) => m.AdvertcreatePageModule,
          ),
      },
      {
        path: 'allorders',
        loadChildren: () =>
          import('../views/allorders/allorders.module').then(
            (m) => m.AllordersPageModule,
          ),
      },

      {
        path: 'executororders',
        loadChildren: () =>
          import('../views/executororders/executororders.module').then(
            (m) => m.ExecutorordersPageModule,
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../views/profile/profile.module').then(
            (m) => m.ProfilePageModule,
          ),
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
