import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { logoutAction } from "src/app/core/auth";
import { PersistanceService } from "src/app/core/services";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
