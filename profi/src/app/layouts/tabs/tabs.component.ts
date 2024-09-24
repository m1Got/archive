import { Component, inject } from "@angular/core";
import { TuiSheetDialogService } from "@taiga-ui/addon-mobile";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent {
  authService = inject(AuthService);
  tuiSheetDialogService = inject(TuiSheetDialogService);

  showDropdownDialog(template) {
    this.tuiSheetDialogService
      .open(template, { closeable: true })
      .subscribe({});
  }
}
