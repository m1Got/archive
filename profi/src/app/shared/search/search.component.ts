import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiAutoFocusModule } from "@taiga-ui/cdk";
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiDialogService,
  TuiTextfieldControllerModule,
} from "@taiga-ui/core";
import { TuiInputModule } from "@taiga-ui/kit";

@Component({
  standalone: true,
  selector: "app-search",
  templateUrl: "./search.component.html",
  imports: [
    CommonModule,
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiAutoFocusModule,
  ],
})
export class SearchComponent implements OnInit {
  showResults = false;

  tuiDialogService = inject(TuiDialogService);

  constructor() {}

  ngOnInit() {}

  showSearch(template) {
    this.tuiDialogService
      .open(template, { size: "l", appearance: "primary-search" })
      .subscribe({ complete: () => (this.showResults = false) });
  }
}
