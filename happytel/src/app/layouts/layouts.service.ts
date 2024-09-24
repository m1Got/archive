import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TuiDialogService } from "@taiga-ui/core";
import { AuthService } from "../services/auth.service";
import { PolymorpheusComponent } from "@tinkoff/ng-polymorpheus";
import { AuthLayout } from "./auth/auth.layout";

@Injectable({ providedIn: "root" })
export class LayoutsService {
  constructor(
    private router: Router,
    private dialogService: TuiDialogService,
    private authService: AuthService,
  ) {}

  passProfile() {
    this.authService.isLoggedIn
      ? this.router.navigateByUrl("/profile")
      : this.openAuthTemplate();
  }

  openAuthTemplate() {
    this.authService.authLayoutSubs = this.dialogService
      .open(new PolymorpheusComponent(AuthLayout), { size: "s" })
      .subscribe();
  }
}
