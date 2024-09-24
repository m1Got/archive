import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { API_URLS, ApiService } from "src/app/services/api.service";
import { TariffsService } from "src/app/services/tariffs.service";
import { UtilsService } from "src/app/services/utils.service";
import { TranslateService } from "src/app/shared/translate/translate.service";
import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styles: [
    `
      .scroll {
        height: 200px;

        // --tui-duration: 0;
      }
    `,
  ],
})
export class HomePage implements OnInit {
  idsValue: any[];

  path = API_URLS.main;

  news$ = this.apiService.queryNews();
  popularTariffs$ = this.tariffsService.getPopularTariffs();
  countries$ = this.apiService.queryCountries();
  chosenCountries$: Observable<any>;
  currentLanguage$ = this.translateService.getLanguage();

  constructor(
    public utils: UtilsService,
    private apiService: ApiService,
    private router: Router,
    private tariffsService: TariffsService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.chosenCountries$ = this.apiService.queryCountries().pipe(
      map((query) => {
        const chosen = query.data.filter((country) => !!country.selecting);
        return { ...query, data: chosen };
      }),
    );
  }

  changeRoute() {
    const ids = this.utils.groupObjectKeys(this.idsValue);
    const strParams = this.utils.strParams({ ids: ids?.id, esim: 0 });

    this.router.navigateByUrl(`/rates?${strParams}`);
  }
}
