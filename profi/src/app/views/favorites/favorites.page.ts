import { Location } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.page.html",
})
export class FavoritesPage implements OnInit {
  activeSegment = "requests";
  favoriteItems = Array.from({ length: 4 });

  navigationService = inject(NavigationService);

  constructor() {}

  ngOnInit() {}
}
