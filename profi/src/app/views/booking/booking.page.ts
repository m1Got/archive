import { Component, OnInit, inject } from "@angular/core";
import { TuiDialogService } from "@taiga-ui/core";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.page.html",
})
export class BookingPage implements OnInit {
  steps = {
    1: {
      step: 1,
      title: "Выберите категорию",
    },
    2: {
      step: 2,
      title: "Электрика",
    },
    3: {
      step: 3,
      title: "Детали заказа",
    },
  };
  step = 1;
  title = this.steps[1].title;

  navigationService = inject(NavigationService);
  tuiDialogService = inject(TuiDialogService);

  constructor() {}

  ngOnInit() {}

  setStep(step: number) {
    this.step = step;
    this.title = this.steps[step].title;
  }

  showMap(template) {
    this.tuiDialogService
      .open(template, { size: "l", appearance: "primary-search" })
      .subscribe({});
  }
}
