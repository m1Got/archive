import { Component, OnInit } from "@angular/core";
import { TuiCountryIsoCode } from "@taiga-ui/i18n";
@Component({
  selector: "app-auth-phone",
  templateUrl: "./auth-phone.page.html",
})
export class AuthPhonePage implements OnInit {

  countryIsoCode = TuiCountryIsoCode.UZ;
  constructor() {}

  ngOnInit() {}
}
