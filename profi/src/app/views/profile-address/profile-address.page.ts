import { Component, OnInit, inject } from "@angular/core";
import { TuiDialogService } from "@taiga-ui/core";

@Component({
  selector: "app-profile-address",
  templateUrl: "./profile-address.page.html",
})
export class ProfileAddressPage implements OnInit {
  addressItems = Array.from({ length: 2 });

  tuiDialogService = inject(TuiDialogService);

  constructor() {}

  ngOnInit() {}

  showMap(template) {
    this.tuiDialogService
      .open(template, { size: "l", appearance: "primary-search" })
      .subscribe({});
  }
}
