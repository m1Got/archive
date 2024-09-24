import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { TuiAvatarModule, TuiRatingModule } from "@taiga-ui/kit";
import { UtilsServiceService } from "src/app/services/utils.service";
import Swiper, { Navigation } from "swiper";
import { SwiperModule } from "swiper/angular";
import {
  TuiButtonModule,
  TuiHintModule,
  TuiNotificationModule,
  TuiTooltipModule,
} from "@taiga-ui/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { RouterModule } from "@angular/router";
import { TaigaUIModule } from "src/app/taiga-ui.module";

Swiper.use([Navigation]);

@UntilDestroy({ checkProperties: true })
@Component({
  standalone: true,
  selector: "app-performers",
  templateUrl: "./performers.component.html",
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TaigaUIModule,
  ],
  styles: [
    `
      :host {
        --tui-rating-size: 16px;
      }
    `,
  ],
})
export class PerformersComponent implements OnInit {
  @Input() isSlider: boolean;

  data = { rating: 5.0 };

  performers = [
    { name: "abc" },
    { name: "abcd" },
    { name: "abcde" },
    { name: "abcdef" },
  ];

  utilsService = inject(UtilsServiceService);
  ngOnInit() {}
}
