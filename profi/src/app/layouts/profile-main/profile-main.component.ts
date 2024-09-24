import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  inject,
} from "@angular/core";
import { TuiBreakpointService, TuiDialogService } from "@taiga-ui/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-profile-header",
  templateUrl: "./profile-main.component.html",
  styles: [``],
})
export class ProfileMainComponent implements OnInit {
  authService = inject(AuthService);
  tuiDialogService = inject(TuiDialogService);

  breakpoints$ = inject(TuiBreakpointService);
  mobileBreakpoint: string;

  constructor() {
    this.breakpoints$.subscribe((value) => (this.mobileBreakpoint = value));
  }

  ngOnInit() {}

  toggleProfileChild(element: HTMLElement, type: "add" | "remove" | "toggle") {
    if (this.mobileBreakpoint === "mobile") {
      element.classList[type]("_open");
    }
  }

  logout(callback) {
    this.authService.logout();
    return () => callback;
  }

  changeStatus(callback) {
    this.authService.changeStatus();
    console.log(this.authService.userStatus);

    return () => callback;
  }

  showModal(template) {
    this.tuiDialogService
      .open(template, { appearance: "profile-modals", closeable: true })
      .subscribe({});
  }
}
