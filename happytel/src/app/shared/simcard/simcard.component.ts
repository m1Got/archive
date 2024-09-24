import { Component, Input, OnInit } from "@angular/core";
import { TuiAlertService } from "@taiga-ui/core";
import { BehaviorSubject } from "rxjs";
import { ApiService } from "src/app/services/api.service";
import { TariffsService } from "src/app/services/tariffs.service";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-simcard",
  templateUrl: "./simcard.component.html",
})
export class SimcardComponent implements OnInit {
  // "tariff_id": 670,
  //     "tour_agent_id": 1,
  //     "price": 1000,
  //     "delevery_type": 1,
  //     "payment_type": 0,
  //     "payment_method": 0

  @Input() isLastSimcards: boolean;
  @Input() simcard: any;

  extSimcard = new BehaviorSubject({});

  deviceType: string;

  constructor(
    public utils: UtilsService,
    public tariffsService: TariffsService,
    private apiService: ApiService,
    private alerts: TuiAlertService,
  ) {}

  ngOnInit() {}

  setType(template, type) {
    this.deviceType = type;
    this.utils.odTemplate(template, { size: "m" });
  }

  extensionSimcard(template) {
    this.extSimcard.next({
      tariff_id: this.simcard.plan.id,
      tour_agent_id: 1,
      price: this.simcard.plan.price_sell,
      delevery_type: 1,
      payment_type: 0,
      payment_method: 0,
      // tariff_id: 670,
      // tour_agent_id: 1,
      // price: 1000,
      // delevery_type: 1,
      // payment_type: 0,
      // payment_method: 0,
    });
    const message = "Запрос на продления отправлен успешно!";

    this.apiService
      .extensionSimcard(this.extSimcard.getValue())
      .subscribe((res) => {
        if ("data" in res) {
          template.complete()
          this.alerts.open(message, { status: "success" }).subscribe();
        }
      });
  }
}
