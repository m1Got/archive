import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { TuiAlertService } from "@taiga-ui/core";
import { BehaviorSubject, timer } from "rxjs";
import { ApiService } from "src/app/services/api.service";

import { AuthService } from "src/app/services/auth.service";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
})
export class ContactsPage implements OnInit {
  isSubmitting$ = new BehaviorSubject(false);

  formContacts = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(12)]],
    phone: ["", [Validators.required, Validators.pattern(/^\+\d{12}$/)]],
    comments: ["", [Validators.required, Validators.maxLength(150)]],
  });

  constructor(
    public utils: UtilsService,
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private alerts: TuiAlertService,
  ) {}

  ngOnInit() {
    if (!!this.authService.isLoggedIn) {
      this.formContacts.patchValue({
        name: `${this.authService.currentUser.name ?? ""}`,
        phone: this.authService.currentUser.phone,
      });
      this.formContacts.get("phone").disable();
    }
  }

  onSubmit() {
    const message = "Сообщение успешно отправлено в Telegram";
    this.isSubmitting$.next(true);

    this.apiService.queryTelegram({ ...this.formContacts.getRawValue() });

    timer(2500).subscribe((_) => {
      this.alerts.open(message, { status: "success" }).subscribe();
      this.isSubmitting$.next(false);
      // window.location.reload()
    });
  }
}
