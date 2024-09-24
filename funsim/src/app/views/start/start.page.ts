import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { PersistanceService, UtilsService } from "src/app/core/services";

@Component({
  selector: "app-start",
  templateUrl: "./start.page.html",
  styleUrls: ["./start.page.scss"],
})
export class StartPage implements OnInit {
  activeLng: string;
  constructor(
    private translateService: TranslateService,
    private persistanceService: PersistanceService
  ) {}

  ngOnInit() {}

  changeLng() {
    this.translateService.use(this.activeLng);
    this.persistanceService.set("lng", this.activeLng);
  }
}
