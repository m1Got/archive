import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UtilsService } from "./utils.service";
import { injectQuery } from "@ngneat/query";
import { BehaviorSubject, filter, map } from "rxjs";
import { TranslateService } from "../shared/translate/translate.service";
import { TuiAlertService } from "@taiga-ui/core";

export enum API_URLS {
  main = "https://crm.happytel.uz",
  // https://beta.happytel.uz
  // https://crm.happytel.uz
  bot = "https://bot.esot.uz/notification/index.php",
  api = API_URLS.main + "/api",
}

@Injectable({ providedIn: "root" })
export class ApiService {
  countries: any[];
  private tgToken =
    "7c%23r9q}!-GQ1hQG{|z@LIw/9HOF{w@LWFaFgB4V-?-pvk6EgEccav,[DPDkK=ZX";

  private query = injectQuery();

  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private translateService: TranslateService,
    private alerts: TuiAlertService,
  ) {}

  createOrder(orderDto) {
    const apiUrl = API_URLS.api + "/user/create-order";
    return this.http.post(apiUrl, orderDto);
  }

  extensionSimcard(dto) {
    const apiUrl = API_URLS.api + "/user/create-dop-order";
    return this.http.post(apiUrl, dto, {});
  }

  queryCountries() {
    return this.getQuery(API_URLS.api + "/getCountries").result$.pipe(
      filter(({ data }) => !!data),
      map((query) => {
        this.countries = query.data;
        return {
          ...query,
          data: this.utils.sortByAlphabet(query.data, "name"),
        };
      }),
    );
  }

  queryNews() {
    return this.getQuery(API_URLS.api + "/news").result$.pipe(
      filter(({ data }) => !!data),
      map((query) => {
        const filteredByLng = this.utils.filterByLng(query.data.reverse());

        return { ...query, data: filteredByLng };
      }),
    );
  }

  queryNewsById(id: string) {
    return this.getQuery(API_URLS.api + `/news/${id}`);
    2;
  }

  queryFaqs() {
    return this.getQuery(API_URLS.api + "/faqs").result$.pipe(
      filter(({ data }) => !!data),
      map((query) => {
        const filteredByLng = this.utils.filterByLng(query.data);

        return { ...query, data: filteredByLng };
      }),
    );
  }

  querySimcards() {
    return this.getQuery(API_URLS.api + "/user/orders").result$.pipe(
      filter(({ data }) => !!data),
      map((query) => {
        this.countries = query.data;
        return {
          ...query,
          data: this.utils.sortByNumeric(query.data, "created_at"),
        };
      }),
    );
  }

  queryTariffs() {
    return this.getQuery(API_URLS.api + "/getTariffs");
  }

  async queryTelegram({ name, phone, comments }) {
    const text = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\nКоммент: ${comments}`,
    );
    const apiUrl = `${API_URLS.bot}?token=${this.tgToken}&text=${text}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  }

  getQuery(apiUrl: string) {
    return this.query({
      queryKey: [apiUrl] as const,
      queryFn: () => this.http.get<any>(apiUrl),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    });
  }

  getAsObservable(subject: BehaviorSubject<any>) {
    return subject.asObservable();
  }
}
