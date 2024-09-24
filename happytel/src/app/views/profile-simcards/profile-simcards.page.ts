import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-profile-simcards",
  templateUrl: "./profile-simcards.page.html",
})
export class ProfileSimcards implements OnInit {
  simcards$ = this.apiService.querySimcards();
  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
