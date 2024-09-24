import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-profile-verification",
  templateUrl: "./profile-verification.page.html",
})
export class ProfileVerificationPage implements OnInit {
  activeSegment = "id_card";

  readonly control = new FormControl();

  constructor() {}

  ngOnInit() {}
  
  removeFile(): void {
    this.control.setValue(null);
  }
}
