import { Store } from "@ngrx/store";
import { filter, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { API_ENV, PersistanceService } from "src/app/core/services";
import { IUser } from "src/app/core/types";
import { user } from "src/app/core/auth";

@Injectable({ providedIn: "root" })
export class AuthService {
  currentUser: IUser;
  isLoggedIn = this.persistanceService.get("accessToken");

  constructor(
    private http: HttpClient,
    private store: Store,
    private persistanceService: PersistanceService
  ) {
    this.store
      .select(user)
      .pipe(filter(Boolean))
      .subscribe((user) => {
        this.currentUser = user;
      });
  }

  updateUser({ name, surname, patronymic }) {
    return this.http
      .post<{ data: IUser }>(`${API_ENV.apiUrl}/saveProfile`, {
        patronymic,
        surname,
        name,
      })
      .pipe(map((response) => response.data));
  }

  login({ phone }) {
    return this.http.post<{ message: string }>(`${API_ENV.apiUrl}/login`, {
      phone,
    });
  }

  confirm({ phone, code }) {
    return this.http
      .post<{ user: IUser }>(`${API_ENV.apiUrl}/confirm`, { phone, code })
      .pipe(map((response) => response.user));
  }

  getCurrentUser() {
    return this.http.get<IUser>(`${API_ENV.apiUrl}/getCurrentUser`);
  }
}
