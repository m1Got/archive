import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { PersistanceService } from "./services/persistance.service";
import { TariffsService } from "./services/tariffs.service";
import { ApiService } from "./services/api.service";
import { combineLatest } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <tui-root id="tuiRoot">
      <ngx-loading-bar
        ref="router"
        [fixed]="true"
        [includeSpinner]="false"
        color="var(--primary)"
        height="5px"
      ></ngx-loading-bar>
      <ng-container *tuiLet="combinedSubs$ | async as combinedSubs">
        <ng-container *ngIf="!combinedSubs">
          <img class="center-x absolute top-1/3 w-80" src="images/logo.svg" />
          <tui-loader class="relative flex-auto " [showLoader]="true" />
        </ng-container>
        <ng-container *ngIf="!!combinedSubs">
          <app-header />
          <main class="flex-auto">
            <router-outlet />
          </main>
          <app-footer />
          <app-tabs />
        </ng-container>
      </ng-container>
    </tui-root>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  combinedSubs$ = combineLatest([
    this.apiService.queryCountries(),
    this.authService.getAuthState(),
    this.tariffsService.getTariffs(),
  ]);

  constructor(
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private tariffsService: TariffsService,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    const token = this.persistanceService.get("accessToken");

    if (token) {
      this.authService.getCurrentUser();
    }
  }
}
