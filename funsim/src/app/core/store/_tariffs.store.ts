import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable, exhaustMap, map, tap } from "rxjs";

import { ApiService } from "src/app/core/services";
import { ITariff } from "src/app/core/types";

interface ITariffsState {
  isLoading: boolean;
  tariffs: ITariff[] | null;
}

const initialState: ITariffsState = {
  isLoading: false,
  tariffs: null,
};

@Injectable({ providedIn: "root" })
export class TariffsStore extends ComponentStore<ITariffsState> {
  readonly isLoading$ = this.select((state) => state.isLoading);
  readonly vm$ = this.select(
    {
      isLoading: this.select((state) => state.isLoading),
      tariffs: this.select((state) => state.tariffs),
    },
    { debounce: true }
  );

  getTariffs = this.effect((url$: Observable<string>) =>
    url$.pipe(
      tap(() => this.patchState({ isLoading: true })),
      exhaustMap((url) =>
        this.apiService
          .getTariffs(url)
          .pipe(
            map((tariffs) => this.patchState({ isLoading: false, tariffs }))
          )
      )
    )
  );

  constructor(private apiService: ApiService) {
    super(initialState);
  }
}
