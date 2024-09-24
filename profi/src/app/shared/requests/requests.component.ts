import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TuiButtonModule, TuiNotificationModule } from "@taiga-ui/core";
import { UtilsServiceService } from "src/app/services/utils.service";
import { SwiperModule } from "swiper/angular";

@Component({
  standalone: true,
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  imports: [
    CommonModule,
    IonicModule,
    TuiButtonModule,
    SwiperModule,
    TuiNotificationModule,
  ],
  styles: [
    `
      :host {
        --tui-rating-size: 16px;
      }
    `,
  ],
})
export class RequestsComponent implements OnInit {
  @Input() isSlider: boolean;

  requests = [
    { name: "abc" },
    { name: "abcd" },
    { name: "abcde" },
    { name: "abcdef" },
  ];

  utilsService = inject(UtilsServiceService);
  ngOnInit() {}
}
