import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { PersistanceService } from "src/app/services/persistance.service";
import { Router } from "@angular/router";
import { LayoutsService } from "../layouts.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.layout.html",
})
export class AuthLayout implements OnInit {
  isCodeSended$: Observable<boolean>;
  isSubmitting$ = this.authService.isSubmitting$.asObservable();
  retryTime;

  // dialogContext = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);

  loginForm = this.fb.group({
    phone: ["", [Validators.required, Validators.pattern(/^\+\d{12}$/)]],
  });

  confirmForm = this.fb.group({
    code: ["", [Validators.required, Validators.pattern(/^\d{6}$/)]],
  });

  constructor(
    private persistanceService: PersistanceService,
    private layoutsService: LayoutsService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.isCodeSended$ = this.authService.getIsCodeSended$();
  }

  login() {
    const phone = this.loginForm.getRawValue().phone;
    this.authService.login(phone);
  }

  confirm() {
    const phone = this.loginForm.getRawValue().phone;
    const code = this.confirmForm.getRawValue().code;
    this.authService.confirm(phone, code);
  }

  setIsCodeSended() {
    this.authService.setIsCodeSended(false);
  }
}
