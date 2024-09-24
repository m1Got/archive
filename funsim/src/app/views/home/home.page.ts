import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { ApiQueryService, UtilsService } from "src/app/core/services";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  activeTab = "country";

  esim: boolean;
  countryID: number;
  countryIDS: number[] = [];

  queryCountries$ = this.apiQueryService.getCountries();

  constructor(
    private router: Router,
    private apiQueryService: ApiQueryService,
    private utilsService: UtilsService
  ) {}

  rateByCountry() {
    if (this.activeTab === "country") {
      this.utilsService.countryID = this.countryID;
    }

    if (this.activeTab === "countries") {
      this.utilsService.countryIDS = this.countryIDS;
    }

    this.utilsService.esim = this.esim;
    this.router.navigate(["/tabs/rates/"]);
  }
}
