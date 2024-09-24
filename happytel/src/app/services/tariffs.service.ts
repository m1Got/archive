import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  combineLatest,
  delay,
  filter,
  map,
  of,
  shareReplay,
  tap,
} from "rxjs";
import { ApiService } from "./api.service";
import { UtilsService } from "./utils.service";

@Injectable({ providedIn: "root" })
export class TariffsService {
  private initialTariffs: any[];

  private isLoading$ = new BehaviorSubject<boolean>(false);
  private tariffs$ = new BehaviorSubject<any[] | null>(null);
  private popularTariffs$ = new BehaviorSubject<any[] | null>(null);

  constructor(
    private utils: UtilsService,
    private apiService: ApiService,
  ) {}

  getTariffsState() {
    return combineLatest([this.isLoading$, this.tariffs$]).pipe(
      map(([isLoading, tariffs]) => ({ tariffs, isLoading })),
    );
  }

  getPopularTariffs() {
    return this.popularTariffs$.asObservable();
  }

  getTariffById(id: number) {
    return this.initialTariffs.find((tariff) => tariff.id === id);
  }

  filterTariffs(ids: number[] = [], esim: boolean = false) {
    this.isLoading$.next(true);
    const tariffs = this.tariffs$.getValue();

    const filteredTariffs = tariffs.filter(
      (tariff) =>
        tariff.regions.some((region) => ids.includes(region.id)) ??
        tariff.esim === esim,
    );

    of(null)
      .pipe(delay(500))
      .subscribe(() => {
        !!ids.length
          ? this.tariffs$.next(filteredTariffs)
          : this.tariffs$.next(this.initialTariffs);

        this.isLoading$.next(false);
      });
  }

  getTariffs() {
    return this.apiService.queryTariffs().result$.pipe(
      filter(({ isFetched }) => isFetched),
      map((query) => {
        const data = query.data.filter(
          (tariff) => !tariff.hide_site && tariff.region_group,
        );
        const filterByDescription = data.map((tariff) => ({
          ...tariff,
          description: Number.isNaN(Number(tariff.description))
            ? tariff.description
            : null,
        }));

        const filteredByGroup = this.utils.sortByAlphabetObject(
          filterByDescription,
          "region_group",
          "name",
        );

        return { ...query, data: filteredByGroup };
      }),
      tap(({ data, isLoading }) => {
        const popular = data.filter((tariff) => !!tariff.popular);

        this.popularTariffs$.next(popular);
        this.tariffs$.next(data);
        this.isLoading$.next(isLoading);
        this.initialTariffs = data;
      }),
      shareReplay(1),
    );
  }
}
