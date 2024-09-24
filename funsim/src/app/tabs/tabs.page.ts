import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { isLoggedIn } from "src/app/core/auth";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  isLoggedIn$ = this.store.select(isLoggedIn);
  constructor(private store: Store) {}
}
