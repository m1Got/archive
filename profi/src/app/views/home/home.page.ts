import { Component, OnInit } from "@angular/core";
import Swiper, { EffectFade, Pagination, SwiperOptions } from "swiper";

Swiper.use([Pagination, EffectFade]);

@Component({
  selector: "page-home",
  templateUrl: "home.page.html",
  styles: [``],
})
export class HomePage implements OnInit {
  bannerItems = Array.from({ length: 4 });

  bannerConfig: SwiperOptions = {
    effect: "fade",
    pagination: {
      clickable: true,
      el: "[data-banner-pagination]",
    },
  };

  constructor() {}

  ngOnInit() {}
}
