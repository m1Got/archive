import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, delay, map, of, tap } from "rxjs";

import { UtilsService } from "src/app/core/services";
import { IOrder, IPaymentResponse, ITariff } from "src/app/core/types";

export enum API_ENV {
  sireUrl = "https://funsim.kz",
  apiUrl = "https://funsim.itdodasi.uz/api",
  crmUrl = "https://crm.funsim.kz/api",
}

const cache: Map<string, any[]> = new Map();

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  sendFeedback({ name, phone, message }) {
    return this.http.post(`${API_ENV.apiUrl}/createApplication`, {
      message,
      phone,
      name,
    });
  }

  payment({ amount, redirect = false }) {
    return this.http.post<IPaymentResponse>(`${API_ENV.crmUrl}/payment`, {
      amount,
      redirect,
    });
  }

  createOrder(url: string, order: IOrder) {
    return this.http.post(`${API_ENV.apiUrl + url}`, order);
  }

  extSimcard({ id, regionID, planID }) {
    const url = `${API_ENV.crmUrl}/createDopOrder?id=${id}&region_group_id=${regionID}&plan_id=${planID}`;
    return this.http.get(url);
  }

  getTariffs(url: string): Observable<ITariff[]> {
    const serialAction = JSON.stringify(url);

    if (!cache.has(serialAction)) {
      return this.http.get<ITariff[]>(API_ENV.crmUrl + url).pipe(
        map((tariffs) => tariffs.filter((tariff) => !tariff.hide_site)),
        tap((tariffs) => this.utilsService.sortByAlphabet(tariffs, "name")),
        tap((tariffs) => cache.set(serialAction, tariffs))
      );
    } else {
      return of(cache.get(serialAction)).pipe(delay(500));
    }
  }
}
