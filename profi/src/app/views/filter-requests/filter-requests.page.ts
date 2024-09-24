import { Component, OnInit, inject } from "@angular/core";
import { TuiSheetDialogService } from "@taiga-ui/addon-mobile";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-filter-requests",
  templateUrl: "./filter-requests.page.html",
})
export class FilterRequestsPage implements OnInit {
  data = { rating: 5.0 };

  tuiSheetDialogService = inject(TuiSheetDialogService);
  navigationService = inject(NavigationService);

  constructor() {}

  ngOnInit() {}

  showFilterModal(template) {
    this.tuiSheetDialogService
      .open(template, { closeable: true })
      .subscribe({});
  }
}
