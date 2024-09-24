import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { tuiHintOptionsProvider } from "@taiga-ui/core";
import { LayoutsService } from "src/app/layouts/layouts.service";
import { API_URLS } from "src/app/services/api.service";
import { AuthService } from "src/app/services/auth.service";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-tariff",
  templateUrl: "./tariff.component.html",
  providers: [
    tuiHintOptionsProvider({
      icon: "tuiIconAlertCircleLarge",
    }),
  ],
})
export class TariffComponent implements OnInit {
  @Input() isSlider: boolean;
  @Input() inOrder: boolean;
  @Input() isLarge: boolean;
  @Input() tariff: any;

  countries: any[];
  path = API_URLS.main;

  constructor(
    public utils: UtilsService,
    private authService: AuthService,
    private layoutsService: LayoutsService,
    private router: Router,
  ) {}

  ngOnInit() {}

  availableCountries(countries: any[], template) {
    this.countries = countries;
    this.utils.odTemplate(template, { size: 'l' });
  }

  referenceToAuth(tariff, simTypeTemplate, orderPromptTemplate) {
    this.authService.orderTariff$.next({ tariff, simTypeTemplate });
    if (this.authService.isLoggedIn) {
      this.authService.plugTariff(tariff, simTypeTemplate);
    } else {
      this.utils.odTemplate(orderPromptTemplate,{ size: 's' });
    }
  }

  simTypeReference(type, template) {
    const tariff = this.authService.orderTariff$.getValue().tariff;
    const id = tariff.id;
    if (tariff.esim && tariff.physical_sim) {
      this.router.navigate(["/order"], { queryParams: { id, type } });
    }

    template.complete();
  }

  openAuthTemplate(template) {
    template.complete();
    this.authService.pathAfterConfirm = "/order";
    this.layoutsService.openAuthTemplate();
  }
}
