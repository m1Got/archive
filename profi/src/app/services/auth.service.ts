import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { PersistanceService } from "./persistance.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  userStatus: "client" | "executor" = "executor";
  isLoggedIn: boolean;

  router = inject(Router);
  persistanceService = inject(PersistanceService);

  constructor() {
    this.checkUser();
  }

  checkUser() {
    this.isLoggedIn = this.persistanceService.get("@token") || false;
  }

  changeStatus() {
    this.userStatus === "client"
      ? (this.userStatus = "executor")
      : (this.userStatus = "client");
  }

  login() {
    this.isLoggedIn = true;
    this.router.navigateByUrl("/");
    this.persistanceService.set("@token", "userToken");
  }

  logout() {
    this.persistanceService.remove("@token");
    this.router.navigateByUrl("/");
  }
}
