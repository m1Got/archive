import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable, exhaustMap, finalize, tap } from "rxjs";

import { ApiService, UtilsService } from "src/app/core/services";

@Injectable()
export class FeedbackStore extends ComponentStore<{ submitting: boolean }> {
  readonly submitting$ = this.select((storage) => storage.submitting);

  sendFeedback = this.effect((post$: Observable<any>) => {
    return post$.pipe(
      tap(() => this.patchState({ submitting: true })),
      exhaustMap((post) =>
        this.apiService.sendFeedback(post).pipe(
          tap(() =>
            this.utilsService.presentToast("Сообщения успешно отправлено!")
          ),
          finalize(() => this.patchState({ submitting: false }))
        )
      )
    );
  });

  constructor(
    private apiService: ApiService,
    private utilsService: UtilsService
  ) {
    super({ submitting: false });
  }
}
