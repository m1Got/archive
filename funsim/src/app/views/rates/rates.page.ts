import { AfterViewChecked, ChangeDetectorRef, Component } from "@angular/core";

import { TariffsStore } from "src/app/core/store";
import { ApiQueryService, UtilsService } from "src/app/core/services";
import { ICountry } from "src/app/core/types";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-rates",
  templateUrl: "./rates.page.html",
  styleUrls: ["./rates.page.scss"],
  providers: [TariffsStore],
})
export class RatesPage implements AfterViewChecked {
  esim: boolean;
  countryID: number;
  countryIDS: number[] = [];

  activeTab = "country";
  queryParams = "";

  queryCountries$ = this.apiQueryService.getCountries();
  tariffsLoading$ = this.tariffsStore.isLoading$;

  constructor(
    private utilsService: UtilsService,
    private changeDetectorRef: ChangeDetectorRef,
    private apiQueryService: ApiQueryService,
    private tariffsStore: TariffsStore
  ) {}

  ionViewWillEnter() {
    this.esim = this.utilsService.esim;
    this.countryID = this.utilsService.countryID;
    this.countryIDS = this.utilsService.countryIDS;

    if (this.countryIDS?.length > 0) {
      this.activeTab = "countries";
    }

    this.tariffsFilter();
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  tariffsFilter() {
    if (this.activeTab === "country") {
      this.queryParams = this.utilsService.getStrParams({
        country_id: this.countryID,
        sim: this.esim ? 1 : 0,
      });
    }

    if (this.activeTab === "countries") {
      this.queryParams = this.utilsService.getStrParams({
        country_ids: this.countryIDS,
        sim: this.esim ? 1 : 0,
      });
    }
  }

  refreshContent(event) {
    // , loading: boolean
    // if(loading) {

    // }
    this.reset();
    this.tariffsLoading$.subscribe((isLoading) => {
      if (!isLoading) {
        setTimeout(() => {
          event.target.complete();
        }, 300);
      }
    });
  }

  reset() {
    this.esim = null;
    this.countryID = null;
    this.countryIDS = null;
    this.queryParams = "";
  }
}
