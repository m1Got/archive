import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { filter, take } from "rxjs";
import { logoutAction, updateUserAction } from "src/app/core/auth";
import { updateUserSubmitting, user } from "src/app/core/auth";
import { AuthService, UtilsService } from "src/app/core/services";
import { IUser } from "src/app/core/types";

@Component({
  selector: "app-personal",
  templateUrl: "./personal.page.html",
  styleUrls: ["./personal.page.scss"],
})
export class PersonalPage implements OnInit {
  isSubmitting$ = this.store.select(updateUserSubmitting);

  form = this.fb.group({
    name: ["", Validators.required],
    surname: ["", Validators.required],
    patronymic: ["", Validators.required],
    phone: [{ value: "", disabled: true }],
  });

  logoutAlertButtons = [
    {
      text: "Отмена",
      role: "cancel",
    },
    {
      text: "Да",
      role: "confirm",
      handler: () => {
        this.store.dispatch(logoutAction());
      },
    },
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.form.setValue({
        name: this.authService.currentUser.name,
        surname: this.authService.currentUser.surname,
        patronymic: this.authService.currentUser.patronymic,
        phone: this.authService.currentUser.phone,
      });
    }
  }

  onSubmit(): void {
    this.form.removeControl("phone");
    this.store.dispatch(updateUserAction.enter(this.form.getRawValue()));
  }
}
