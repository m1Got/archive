import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, exhaustMap, finalize, tap } from "rxjs";

import { IOrder } from "src/app/core/types";
import { ApiService, UtilsService } from "src/app/core/services";

@Injectable()
export class OrderStore extends ComponentStore<{ submitting: boolean }> {
  readonly submitting$ = this.select((state) => state.submitting);

  crateOrder = this.effect(
    (post$: Observable<{ url: string; order: IOrder; redirect: boolean }>) => {
      return post$.pipe(
        tap(() => this.patchState({ submitting: true })),
        exhaustMap(({ url, order, redirect }) =>
          this.apiService.createOrder(url, order).pipe(
            tapResponse(
              () => {
                this.utilsService.presentToast("Заявка на заказ отправлен!");
                this.router.navigate(["/"], { replaceUrl: true });
                // if (redirect) {
                //   this.apiService
                //     .payment({ amount: order.price })
                //     .subscribe(({ data }) => {
                //       window.open(data.redirect_url, "_blank");
                //     });
                // }
              },
              () => {}
            ),
            finalize(() => this.patchState({ submitting: false }))
          )
        )
      );
    }
  );

  constructor(
    private router: Router,
    private apiService: ApiService,
    private utilsService: UtilsService
  ) {
    super({ submitting: false });
  }
}
