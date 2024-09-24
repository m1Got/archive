import { Component, OnInit, inject } from "@angular/core";
import { NavigationService } from "src/app/services/navigation.service";
import { UtilsServiceService } from "src/app/services/utils.service";
import Swiper, { Navigation, Pagination, SwiperOptions } from "swiper";

Swiper.use([Navigation, Pagination]);

@Component({
  selector: "app-performers-detail",
  templateUrl: "./performers-detail.page.html",
})
export class PerformersDetailPage implements OnInit {
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    modules: [Navigation],
    navigation: {
      enabled: true,
      prevEl: "[data-performers-detail-navigation] > [data-prev]",
      nextEl: "[data-performers-detail-navigation] > [data-next]",
    },
    pagination: {
      el: "[data-performers-detail-pagination]",
      clickable: true,
    },
  };

  data = { rating: 5.0 };

  navigationService = inject(NavigationService);
  utilsService = inject(UtilsServiceService);
  constructor() {}

  ngOnInit() {}
}
