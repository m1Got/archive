import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile-balance",
  templateUrl: "./profile-balance.page.html",
})
export class ProfileBalancePage implements OnInit {
  activePayment: "click" | "payme" = "click";
  constructor() {}

  ngOnInit() {}
}
