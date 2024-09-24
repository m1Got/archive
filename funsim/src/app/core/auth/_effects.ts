import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import {
  AuthService,
  UtilsService,
  PersistanceService,
} from "src/app/core/services";

import {
  loginAction,
  logoutAction,
  confirmAction,
  getUserAction,
  updateUserAction,
} from "src/app/core/auth";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction.enter),
      switchMap(({ phone }) =>
        this.authService.login({ phone }).pipe(
          map(({ message }) => loginAction.success({ message })),
          tap(({ message }) => this.utilsService.presentToast(`${message}`))
        )
      )
    )
  );

  confirm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(confirmAction.enter),
      switchMap(({ code, phone }) =>
        this.authService.confirm({ code, phone }).pipe(
          map((user) => confirmAction.success({ user })),
          tap(({ user }) =>
            this.persistanceService.set("accessToken", user.token)
          ),
          catchError((error) =>
            of(confirmAction.failure({ errors: error.error.errors }))
          )
        )
      )
    )
  );

  handleErrorAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(confirmAction.failure),
        tap(() => {
          this.utilsService.presentToast("Проверочный код неправильный");
        })
      ),
    {
      dispatch: false,
    }
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(confirmAction.success),
        tap(() => this.router.navigateByUrl("/")),
        tap(() =>
          this.utilsService.presentToast("Вы успешно зарегистрировались!")
        )
      ),
    {
      dispatch: false,
    }
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAction.enter),
      switchMap(() => {
        const token = this.persistanceService.get("accessToken");
        if (!token) return of(getUserAction.failure());

        return this.authService
          .getCurrentUser()
          .pipe(map((user) => getUserAction.success({ user })));
      })
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserAction.enter),
      switchMap(({ name, surname, patronymic }) =>
        this.authService.updateUser({ name, surname, patronymic }).pipe(
          map((user) => updateUserAction.success({ user })),
          tap(() => this.utilsService.presentToast("Данные успешно сохранены"))
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => this.router.navigateByUrl("/")),
        tap(() => this.persistanceService.set("accessToken", "")),
        tap(() => this.utilsService.presentToast("Вы вышли из аккаунта"))
      ),
    { dispatch: false }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private utilsService: UtilsService,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
