import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import {
  authErrors,
  authSubmitting,
  confirmAction,
  loginAction,
  authMessage,
} from "src/app/core/auth";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  loginPhoneView = false;

  message$ = this.store.select(authMessage);
  isSubmitting$ = this.store.select(authSubmitting);

  loginForm = this.fb.group({
    phone: ["", [Validators.required, Validators.pattern(/[7]{1}[0-9]{10}$/)]],
  });

  confirmForm = this.fb.group({
    phone: [this.loginForm.get("phone").value],
    code: ["", [Validators.required, Validators.pattern(/[0-9]{6}$/)]],
  });

  phoneNumber = "";
  smsCode = "";
  smsCodePattern = /[0-9]{6}$/;

  errors$ = this.store.select(authErrors);

  constructor(private store: Store, private fb: FormBuilder) {}
  ngOnInit() {}

  onLoginSubmit() {
    this.store.dispatch(loginAction.enter(this.loginForm.getRawValue()));
  }

  onConfirmSubmit() {
    this.store.dispatch(confirmAction.enter(this.confirmForm.getRawValue()));
  }
}
