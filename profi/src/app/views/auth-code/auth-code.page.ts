import { Component, OnInit, inject } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-auth-code",
  templateUrl: "./auth-code.page.html",
})
export class AuthCodePage implements OnInit {
  authService = inject(AuthService);

  constructor() {}

  ngOnInit() {}
}
