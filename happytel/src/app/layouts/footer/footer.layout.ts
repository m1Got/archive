import { Component, inject, OnInit } from "@angular/core";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.layout.html",
  styles: [
    `
      :host {
        box-shadow: var(--shadow-dark);
        border-radius: var(--rounded-l) var(--rounded-l) 0 0;

        display: block;
        background: #fff;
        padding-block: 20px;
      }
    `,
  ],
})
export class FooterLayout implements OnInit {
  currentYear = new Date().getFullYear();

  utils = inject(UtilsService);

  ngOnInit() {}
}
