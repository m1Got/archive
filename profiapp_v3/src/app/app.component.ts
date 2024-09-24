import { Component, Inject, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TuiDialog } from '@taiga-ui/cdk';
import {
  TuiDialogComponent,
  TuiDialogContext,
  TuiDialogDirective,
} from '@taiga-ui/core';
import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusModule,
} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ``,
})
export class AppComponent implements OnInit {
  router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      }
    });
  }

  ionViewWillLeave() {}
}
