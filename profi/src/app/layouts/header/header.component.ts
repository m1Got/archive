import { AfterViewInit, Component, OnInit, inject } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

import { UtilsServiceService } from "src/app/services/utils.service";
import { TuiSheetDialogService } from "@taiga-ui/addon-mobile";
import { AuthService } from "src/app/services/auth.service";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  authService = inject(AuthService);
  utilsService = inject(UtilsServiceService);
  tuiSheetDialogService = inject(TuiSheetDialogService);

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.utilsService.onScrollUp("app-header");
  }

  showDropdownDialog(template) {
    this.tuiSheetDialogService
      .open(template, { closeable: true })
      .subscribe({});
  }
}
