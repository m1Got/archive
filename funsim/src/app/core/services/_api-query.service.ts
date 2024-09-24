import { UseQuery } from "@ngneat/query";
import { map, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

import { API_ENV } from "src/app/core/services";
import { UtilsService } from "src/app/core/services";
import * as types from "src/app/core/types";

@Injectable({ providedIn: "root" })
export class ApiQueryService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);
  private utilsService = inject(UtilsService);

  getAdvantages() {
    return this.useQuery(
      ["advantages"],
      () =>
        this.http
          .get<{ data: any[] }>(`${API_ENV.apiUrl}/getAdvantages`)
          .pipe(map((advantages) => advantages.data)),
      { refetchOnWindowFocus: false, refetchOnMount: false }
    ).result$;
  }

  getTidings(url: string) {
    return this.useQuery(
      ["tidings", url],
      () =>
        this.http
          .get<{ data: types.ITiding[] }>(`${API_ENV.apiUrl + url}`)
          .pipe(map((tidings) => tidings.data)),
      { refetchOnWindowFocus: false, refetchOnMount: false }
    ).result$;
  }

  getAgents() {
    return this.useQuery(
      ["agents"],
      () =>
        this.http
          .get<types.IAgent[]>(`${API_ENV.crmUrl}/getAgents`)
          .pipe(
            tap((agents) => this.utilsService.sortByAlphabet(agents, "title"))
          ),
      { refetchOnWindowFocus: false, refetchOnMount: false }
    ).result$;
  }

  getFaq() {
    return this.useQuery(
      ["faq"],
      () =>
        this.http
          .get<{ data: any[] }>(`${API_ENV.apiUrl}/getFaqs`)
          .pipe(map((response) => response.data)),
      { refetchOnWindowFocus: false, refetchOnMount: false }
    ).result$;
  }

  getSeparate(slug: string) {
    return this.useQuery(
      ["separate", slug],
      () =>
        this.http
          .get<{ data: types.ITiding }>(
            `${API_ENV.apiUrl}/getSingleNews/${slug}`
          )
          .pipe(map((response) => response.data)),
      { refetchOnWindowFocus: false, refetchOnMount: false }
    ).result$;
  }

  getCountries() {
    return this.useQuery(
      ["countries"],
      () =>
        this.http
          .get<types.ICountry[]>(`${API_ENV.crmUrl}/getCountries`)
          .pipe(
            tap((countries) =>
              this.utilsService.sortByAlphabet(countries, "name")
            )
          ),
      { refetchOnWindowFocus: false, refetchOnMount: false }
    ).result$;
  }

  getTariff(id: number) {
    return this.useQuery(
      ["tariff", id],
      () =>
        this.http.get<types.ITariff>(
          `${API_ENV.crmUrl}/getTariffs?tariff_id=${id}`
        ),
      { refetchOnWindowFocus: false, refetchOnMount: false }
    ).result$;
  }

  getSimcards() {
    return this.useQuery(
      ["simcards"],
      () =>
        this.http
          .get<types.ISimcard[]>(`${API_ENV.apiUrl}/getUserOrders`)
          .pipe(map((simcards) => simcards.reverse())),
      { refetchOnWindowFocus: false, refetchOnMount: false }
    ).result$;
  }
}
