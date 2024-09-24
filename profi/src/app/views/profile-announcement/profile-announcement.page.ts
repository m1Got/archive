import { Component, OnInit, inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TuiDialogService } from "@taiga-ui/core";

@Component({
  selector: "app-profile-announcement",
  templateUrl: "./profile-announcement.page.html",
})
export class ProfileAnnouncementPage implements OnInit {
  activeTab: "active" | "not_active" = "active";

  announcementItems = Array.from({ length: 2 });
  tuiDialogService = inject(TuiDialogService);

  readonly file1 = new FormControl();
  readonly file2 = new FormControl();

  constructor() {}

  ngOnInit() {}

  showDialog(template) {
    this.tuiDialogService
      .open(template, { size: "l", appearance: "announcement-detail" })
      .subscribe({});
  }

  removeFile(control): void {
    control.setValue(null);
  }
}
