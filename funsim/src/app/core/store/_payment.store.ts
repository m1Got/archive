import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, exhaustMap, tap } from "rxjs";
import { ApiService } from "../services";
import { Router } from "@angular/router";

@Injectable()
export class PaymentStore extends ComponentStore<{ submitting: boolean }> {
  readonly submitting$ = this.select((state) => state.submitting);

  payment = this.effect((post$: Observable<{ amount }>) => {
    return post$.pipe(
      tap(() => this.patchState({ submitting: true })),
      exhaustMap(({ amount }) =>
        this.apiService.payment({ amount }).pipe(
          tapResponse(
            ({ data }) => {
              window.open(data.redirect_url, "_blank");
            },
            () => {}
          )
        )
      )
    );
  });
  constructor(private apiService: ApiService, private router: Router) {
    super({ submitting: false });
  }
}
