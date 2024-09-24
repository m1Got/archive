import { Component, OnInit } from "@angular/core";
import { UtilsService } from "src/app/services/utils.service";
import { LayoutsService } from "../layouts.service";
import { TranslateService } from "src/app/shared/translate/translate.service";


@Component({
  selector: "app-header",
  templateUrl: "./header.layout.html",
  styles: [
    `
      :host {
        box-shadow: var(--shadow-dark);
        border-radius: 0 0 var(--rounded-l) var(--rounded-l);

        display: block;
        background: #fff;
        padding-block: 8px;
        transition: transform 0.3s ease;
        position: sticky;
        z-index: 20;
        width: 100%;
        left: 0;
        top: 0;
      }
    `,
  ],
})
export class HeaderLayout implements OnInit {
  currentLanguage$ = this.translateService.getLanguage();
  openLanguageDropdown: boolean;


  constructor(
    public utils: UtilsService,
    public layoutsService: LayoutsService,
    public translateService: TranslateService,
  ) {}

  ngOnInit() {
    this.utils.onScrollUp("app-header");
  }

  setLanguage(value) {
    const currentLanguage = this.translateService.getLanguageValue();
    if (value !== currentLanguage) {
      this.openLanguageDropdown = false;
      this.translateService.setLanguage(value);
      location.reload();
    }
  }
}
