import { Injectable } from "@angular/core";
import { PersistanceService } from "./persistance.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {
  BehaviorSubject,
  Observable,
  Subscription,
  combineLatest,
  map,
  tap,
} from "rxjs";
import { TuiAlertService } from "@taiga-ui/core";
import { UtilsService } from "./utils.service";
import { API_URLS } from "./api.service";

export type User = {
  id: number;
  avatar: string;
  email: string | null;
  surname: string | null;
  email_verified_at: string | null;
  name: string | null;
  passport_image: string | null;
  patronymic: string | null;
  phone: string | null;
  role_id: number | null;
  settings: null;
  token: string;
  updated_at: string;
  created_at: string;
};

@Injectable({ providedIn: "root" })
export class AuthService {
  isLoggedIn: boolean;
  currentUser: User;
  isCodeSended: boolean;
  authLayoutSubs: Subscription;
  isPassToProfile: boolean = true;
  pathAfterConfirm: string = "/profile";

  private currentUserSubject$ = new BehaviorSubject<User>(null);
  private isLoggedInSubject$ = new BehaviorSubject<boolean>(false);
  private isCodeSendedSubject$ = new BehaviorSubject<boolean>(false);

  orderTariff$ = new BehaviorSubject<{ tariff?; simTypeTemplate? }>(null);
  isSubmitting$ = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private persistanceService: PersistanceService,
    private utils: UtilsService,
    private alerts: TuiAlertService,
    private http: HttpClient,
  ) {}

  getAuthState() {
    return combineLatest([
      this.isLoggedInSubject$,
      this.currentUserSubject$,
    ]).pipe(
      map(([isLoggedIn, currentUser]) => ({ isLoggedIn, currentUser })),
      tap(({ isLoggedIn, currentUser }) => {
        this.isLoggedIn = isLoggedIn;
        this.currentUser = currentUser;
      }),
    );
  }

  getCurrentUser$(): Observable<User> {
    return this.currentUserSubject$.asObservable();
  }

  getIsLoggedIn$() {
    return this.isLoggedInSubject$.asObservable();
  }

  setIsCodeSended(value: boolean) {
    this.isCodeSendedSubject$.next(value);
  }

  getIsCodeSended$() {
    return this.isCodeSendedSubject$.asObservable();
  }

  login(phone: string) {
    const apiUrl = API_URLS.api + "/login";
    this.isSubmitting$.next(true);
    this.http.post<any>(apiUrl, { phone }).subscribe(({ message }) => {
      this.alerts.open(message, { status: "success" }).subscribe();
      this.isCodeSendedSubject$.next(true);
      this.isSubmitting$.next(false);
    });
  }

  confirm(phone: string, code: string) {
    const apiUrl = API_URLS.api + "/confirm";
    this.isSubmitting$.next(true);
    this.http
      .post<{ user: User }>(apiUrl, { phone, code })
      .subscribe((response) => {
        if ("message" in response) {
          this.alerts.open(response.message, { status: "warning" }).subscribe();
        }
        if ("user" in response) {
          this.currentUserSubject$.next(response.user);
          this.isLoggedInSubject$.next(true);
          this.isCodeSendedSubject$.next(false);
          this.persistanceService.set("accessToken", response.user.token);
          if (this.pathAfterConfirm === "/profile") {
            this.router.navigate(["/profile"]);
          }
          if (this.pathAfterConfirm === "/order") {
            const tariff = this.orderTariff$.getValue().tariff;
            const template = this.orderTariff$.getValue().simTypeTemplate;
            this.plugTariff(tariff, template);
          }
          this.authLayoutSubs.unsubscribe();
          this.isSubmitting$.next(false);
        }
      });
  }

  logout() {
    this.currentUserSubject$.next(null);
    this.isLoggedInSubject$.next(false);
    this.persistanceService.remove("accessToken");
    this.router.navigate(["/"]);
  }

  getCurrentUser() {
    const apiUrl = API_URLS.api + "/user/get";

    this.http.get<User>(apiUrl).subscribe((user) => {
      console.log(user);
      
      if ("name" in user && "avatar" in user) {
        this.currentUserSubject$.next(user);
        this.isLoggedInSubject$.next(true);
      }
    });
  }

  updateCurrentUser(updatedUserDto) {
    const apiUrl = API_URLS.api + "/user/update";
    const currentUser = this.currentUserSubject$.getValue();

    this.http.post(apiUrl, updatedUserDto).subscribe(() => {
      this.currentUserSubject$.next({ ...currentUser, ...updatedUserDto });

      this.alerts
        .open("Данные успешно обновлены", { status: "success" })
        .subscribe();
    });
  }

  plugTariff(tariff, template, type = tariff.esim ? "esim" : "physical") {
    const id = tariff.id;

    if (!tariff.esim || !tariff.physical_sim) {
      this.router.navigate(["/order"], { queryParams: { id, type } });
    }

    if (tariff.esim && tariff.physical_sim) {
      this.utils.odTemplate(template, { size: "m" });
    }
  }
}
