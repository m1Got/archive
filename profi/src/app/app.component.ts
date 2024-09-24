import { Component } from "@angular/core";

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
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
      <app-tabs />
    </tui-root>
  `,
  styles: [``],
})
export class AppComponent {}
