import { IonicModule } from "@ionic/angular";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxMaskModule } from "ngx-mask";
import { Component, OnInit } from "@angular/core";

import { FeedbackStore } from "src/app/core/store";
import { TranslateComponent } from "../translate/translate.component";
import { AuthService } from "src/app/core/services";

@Component({
  standalone: true,
  selector: "app-feedback",
  styleUrls: ["./feedback.component.scss"],
  templateUrl: "./feedback.component.html",
  providers: [FeedbackStore],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    NgxMaskModule,
    ReactiveFormsModule,

    TranslateComponent,
  ],
})
export class FeedbackComponent implements OnInit {
  form = this.fb.group({
    username: ["", Validators.required],
    phone: ["", [Validators.required, Validators.pattern(/[7]{1}[0-9]{10}$/)]],
    text: [""],
  });

  isSubmitting$ = this.feedbackStore.submitting$;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private feedbackStore: FeedbackStore
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.form.patchValue({ username: this.authService.currentUser.name });
      this.form.patchValue({ phone: this.authService.currentUser.phone });
    }
  }

  onSubmit(): void {
    this.feedbackStore.sendFeedback(this.form.getRawValue());
  }
}
