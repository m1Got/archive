import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { logoutAction } from "src/app/core/auth";
import { PersistanceService } from "src/app/core/services";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  lng = this.persistanceService.get("lng");
  

  constructor(
    private store: Store,
    private translateService: TranslateService,
    private persistanceService: PersistanceService
  ) {}

  ngOnInit() {}

  changeLng() {
    this.translateService.use(this.lng);
    this.persistanceService.set("lng", this.lng);
  }
}
