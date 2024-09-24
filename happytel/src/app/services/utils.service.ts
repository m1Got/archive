import { Injectable, SimpleChanges, inject } from "@angular/core";
import { SwiperOptions } from "swiper";
import { TuiDialogService } from "@taiga-ui/core";
import queryString from "query-string";
import { TranslateService } from "../shared/translate/translate.service";

@Injectable({ providedIn: "root" })
export class UtilsService {
  address = "https://maps.app.goo.gl/CAP5RBmRihuV7Avp7";
  phone = "+99855 500 66 77";
  email = "info@happytel.uz";

  facebookLink = "https://www.facebook.com/happytel.uz/";
  telegramLink = "https://t.me/happytel_uz";
  instagramLink = "https://www.instagram.com/happytel.uz/";

  constructor(
    private translateService: TranslateService,
    private dialogService: TuiDialogService,
  ) {}

  onScrollUp(selector: string) {
    let oldScroll: number;
    const element = document.querySelector(selector) as HTMLElement;

    element.style.setProperty("transform", "translateY(var(--_translateY))");

    window.onscroll = () => {
      if (window.scrollY > oldScroll && window.scrollY > 50) {
        element.style.setProperty("--_translateY", "-100%");
        element.classList.add("_sticky");
      } else {
        element.style.setProperty("--_translateY", "0");
        element.classList.remove("_sticky");
      }
      oldScroll = window.scrollY;
    };
  }

  strParams({ esim, ids }) {
    if (esim && ids)
      return queryString.stringify({ esim, ids }, { arrayFormat: "comma" });

    if (ids) return queryString.stringify({ ids }, { arrayFormat: "comma" });

    if (esim) return queryString.stringify({ esim });

    return queryString.stringify({});
  }

  formData(data: any) {
    const form = new FormData();

    for (const key in data) {
      if (Array.isArray(data[key])) {
        for (const childKey in data[key]) {
          form.append(`${key}[${childKey}]`, data[key][childKey]);
        }
      } else {
        form.append(key, data[key]);
      }
    }

    return form;
  }

  cardSwiper(type: "tariffs" | "news"): SwiperOptions {
    return {
      observer: true,
      observeParents: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      navigation: {
        prevEl: `[data-${type}-navigation] [data-prev]`,
        nextEl: `[data-${type}-navigation] [data-next]`,
      },
      breakpoints: {
        0: { slidesPerView: 1.1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      },
    };
  }

  odTemplate(template, options) {
    this.dialogService.open(template, { ...options }).subscribe({});
  }

  filterByLng(data: any[]) {
    const dataRU = data.filter((n) => Number(n.language) === 2);
    const dataUZ = data.filter((n) => Number(n.language) === 1);
    const currentLanguage = this.translateService.getLanguageValue();

    return currentLanguage === "ru" ? dataRU : dataUZ;
  }

  sortByAlphabet(array: any[] = [], property: string) {
    return array.sort((a, b) => {
      const nameA = a[property].toLowerCase();
      const nameB = b[property].toLowerCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;

      return 0;
    });
  }

  sortByNumeric(array: any[] = [], property: string) {
    return array.sort(
      (a, b) =>
        new Date(b[property]).getTime() - new Date(a[property]).getTime(),
    );
  }

  sortByAlphabetObject(array: any[], object, property) {
    return array.sort((a, b) => {
      if (
        a[object] &&
        a[object].hasOwnProperty(object) &&
        a[object][property].hasOwnProperty(object[property])
      ) {
        const nameA = a[object][property].toLowerCase();
        const nameB = b[object][property].toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
      } else {
        return 0;
      }
    });
  }

  stringifyByName = (item) => item.name;

  groupObjectKeys(data) {
    return data?.reduce((previous, current) => {
      Object.keys(current).forEach((key) => {
        previous[key] = [...(previous[key] ?? []), current[key]];
      });
      return previous;
    }, {});
  }

  ungroupObjectKeys(groupedData) {
    return Object.keys(groupedData).reduce((result, key) => {
      const values = groupedData[key];
      values.forEach((value, index) => {
        if (!result[index]) {
          result[index] = {};
        }
        result[index][key] = value;
      });
      return result;
    }, []);
  }

  filterObjectsById(objects = [], ids = []) {
    return objects?.filter((obj) => !!ids && ids.includes(obj?.id));
  }

  isInputValChanged(changes: SimpleChanges, input: string) {
    return (
      !changes[input]?.firstChange &&
      changes[input]?.currentValue !== changes[input]?.previousValue
    );
  }
}
