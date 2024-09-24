import { Injectable, inject } from "@angular/core";
import { TuiAlertService } from "@taiga-ui/core";
import { Navigation, SwiperOptions } from "swiper";

@Injectable({ providedIn: "root" })
export class UtilsServiceService {
  tuiAlertService = inject(TuiAlertService);

  showAlert(template) {
    this.tuiAlertService.open(template, { icon: "" }).subscribe();
  }

  bodyLock(type: "add" | "remove" | "toggle") {
    document.documentElement.classList[type]("backdrop-lock");
  }

  onScrollUp(selector: string) {
    let oldScroll: number;
    const header = document.querySelector(selector) as HTMLElement;

    window.onscroll = () => {
      window.scrollY > oldScroll && window.scrollY > 50
        ? header.style.setProperty("--_translateY", "-100%")
        : header.style.setProperty("--_translateY", "0");

      oldScroll = window.scrollY;
    };
  }

  cardSwiper(type: "performers" | "requests"): SwiperOptions {
    return {
      modules: [Navigation],
      navigation: {
        prevEl: `[data-${type}-navigation] [data-prev]`,
        nextEl: `[data-${type}-navigation] [data-next]`,
      },
      breakpoints: {
        0: { slidesPerView: 1.1, spaceBetween: 10 },
        480: { slidesPerView: 1.3, spaceBetween: 10 },
        640: { slidesPerView: 1.8, spaceBetween: 10 },
        768: { slidesPerView: 2.2, spaceBetween: 20 },
        992: { slidesPerView: 2.5, spaceBetween: 20 },
        1100: { slidesPerView: 3, spaceBetween: 30 },
      },
    };
  }
}
