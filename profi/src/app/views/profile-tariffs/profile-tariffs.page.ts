import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-profile-tariffs",
  templateUrl: "./profile-tariffs.page.html",
})
export class ProfileTariffsPage implements OnInit {
  testForm = new FormGroup({
    testValue: new FormControl("orange"),
  });

  constructor() {}

  ngOnInit() {}
}
