import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import queryString from "query-string";

@Injectable({ providedIn: "root" })
export class UtilsService {
  esim: boolean;
  countryID: number;
  countryIDS: number[];

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
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

  normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, "");
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl("#", { skipLocationChange: true });
    return this.router.navigateByUrl(url, { skipLocationChange: true });
  }

  getStrParams({ sim, country_id, country_ids }: any): any {
    if (sim && country_id) return queryString.stringify({ sim, country_id });
    if (country_id) return queryString.stringify({ country_id });

    if (sim && country_ids)
      return queryString.stringify(
        { sim, country_ids },
        { arrayFormat: "comma" }
      );
    if (country_ids)
      return queryString.stringify({ country_ids }, { arrayFormat: "comma" });

    if (sim) return queryString.stringify({ sim });

    return queryString.stringify({});
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1500,
      position: "top",
    });

    await toast.present();
  }

  sortByAlphabet(array: any[], property: string) {
    return array.sort((a, b) => {
      const nameA = a[property].toLowerCase();
      const nameB = b[property].toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
}
