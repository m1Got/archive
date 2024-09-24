import { Component, OnInit } from "@angular/core";
import { LayoutsService } from "../layouts.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.layout.html",
  styles: [
    `
      :host {
        box-shadow: var(--shadow-dark);
        border-radius: var(--rounded-m) var(--rounded-m) 0 0;

        gap: 6px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: fixed;
        background: #fff;
        height: 3.6rem;
        z-index: 999;
        bottom: 0;
        left: 0;

        @media (width >= 62em) {
          display: none;
        }
      }

      a.active ion-icon {
        color: var(--primary);
      }
    `,
  ],
})
export class TabsLayout implements OnInit {
  constructor(public layoutsService: LayoutsService) {}

  ngOnInit() {}
}
