import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { API_URLS, ApiService } from "src/app/services/api.service";
import { AuthService } from "src/app/services/auth.service";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
})
export class ProfilePage implements OnInit {
  simcards$ = this.apiService.querySimcards();

  path = API_URLS.main;

  changePassport: boolean;
  isPassportValidate: boolean;
  passportImage = new FormControl();

  private currentUserDto$ = new BehaviorSubject<any>(null);

  formProfile = this.fb.group({
    fio: ["", [Validators.required, Validators.maxLength(15)]],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required, Validators.pattern(/^\+\d{12}$/)]],
  });

  constructor(
    public utils: UtilsService,
    public authService: AuthService,
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      const name = this.authService.currentUser.name ?? "";
      const surname = this.authService.currentUser.surname ?? "";
      const fio = [name, surname];

      this.formProfile.setValue({
        fio: fio.join(" ").trim() ? fio.join(" ") : "",
        email: this.authService.currentUser?.email,
        phone: this.authService.currentUser?.phone,
      });
      this.formProfile.get("phone").disable();

      if (!!this.authService.currentUser.passport_image) {
        this.isPassportValidate = true;
      }
    }
  }

  logout(template) {
    template.complete();
    this.authService.logout();
  }

  onSubmit() {
    const phone = this.formProfile.getRawValue()?.phone;
    const fio = this.formProfile.getRawValue()?.fio;
    const name = fio.split(" ")[0];
    const surname = fio.split(" ").slice(1).join(" ");
    const email = this.formProfile.getRawValue()?.email;

    this.updateUserDto({ name, surname, email, phone });

    if (
      !this.passportImage.value &&
      !!this.authService.currentUser.passport_image
    ) {
      this.updateUserDto({ passport: "" });
    }

    if (this.passportImage.value) {
      this.updateUserDto({ passport: this.passportImage.value });
    }

    const formData = this.currentUserDto$.getValue();
    const formProfileData = this.utils.formData(formData);

    console.log(formData);

    this.authService.updateCurrentUser(formProfileData);
  }

  onChangePassport(template) {
    this.changePassport = true;
    this.isPassportValidate = false;
    template.complete();
  }

  private updateUserDto(newState: any) {
    const currentState = this.currentUserDto$.getValue();
    const updatedState = { ...currentState, ...newState };
    this.currentUserDto$.next(updatedState);
  }
}
