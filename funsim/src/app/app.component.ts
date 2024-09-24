import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";

import { getUserAction } from "src/app/core/auth";
import { PersistanceService } from "src/app/core/services";

@Component({
  selector: "app-root",
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store,
    private translateService: TranslateService,
    private persistanceService: PersistanceService
  ) {}

  ngOnInit(): void {
    const activeLng = this.persistanceService.get("lng") ?? "ru";
    this.translateService.setDefaultLang(activeLng);

    this.store.dispatch(getUserAction.enter());
  }
}
