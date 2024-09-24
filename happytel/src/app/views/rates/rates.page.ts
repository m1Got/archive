import { Location } from "@angular/common";
import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { API_URLS, ApiService } from "src/app/services/api.service";
import { TariffsService } from "src/app/services/tariffs.service";
import { UtilsService } from "src/app/services/utils.service";
import { TranslateService } from "src/app/shared/translate/translate.service";

@Component({
  selector: "app-rates",
  templateUrl: "./rates.page.html",
})
export class RatesPage implements OnInit {
  ids: any[];
  esim: boolean;
  idsValue: any[];
  currentPage: number;
  path = API_URLS.main;
  maxSize: number = 7

  countries$ = this.apiService.queryCountries();
  tariffsState$ = this.tariffsService.getTariffsState();
  currentLanguage$ = this.translateService.getLanguage();

  constructor(
    public utils: UtilsService,
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private tariffsService: TariffsService,
    private translateService: TranslateService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.ids = queryParams["ids"]?.split(",").map((id) => Number(id));
      this.esim = !!queryParams["esim"];

      const objects = this.apiService.countries;
      this.idsValue = this.utils.filterObjectsById(objects, this.ids);

      this.tariffsService.filterTariffs(this.ids, this.esim);
    });
    if(window.innerWidth <= 640) {
      this.maxSize = 5
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if(window.innerWidth <= 640) {
      this.maxSize = 5
    }
  }

  filterByCountries() {
    this.currentPage = 1;
    const esim = this.esim ? 1 : 0;
    const ids = this.utils.groupObjectKeys(this.idsValue);
    const strParams = this.utils.strParams({ esim, ids: ids?.id });
    this.location.go(this.router.url.split("?")[0], strParams);
    this.ids = ids.id;

    this.tariffsService.filterTariffs(ids.id, this.esim);
  }

  changeIds(e: any[]) {
    if (!e.length) {
      this.ids = [];
      this.location.go(this.router.url.split("?")[0]);
      this.tariffsService.filterTariffs([], this.esim);
    }
  }

  changeEsim() {
    const esim = this.esim ? 1 : 0;
    const strParams = this.utils.strParams({ esim, ids: this.ids });
    this.location.go(this.router.url.split("?")[0], strParams);
    this.esim = !!esim;

    this.tariffsService.filterTariffs(this.ids, this.esim);
  }
}
