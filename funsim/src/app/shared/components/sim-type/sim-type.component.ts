import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateComponent } from "../translate/translate.component";
import { Router } from "@angular/router";
import { ITariff } from "src/app/core/types";

@Component({
  standalone: true,
  selector: "app-sim-type",
  imports: [CommonModule, IonicModule, TranslateComponent],
  templateUrl: "./sim-type.component.html",
  styles: [
    `
      ion-row {
        gap: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px 10px;
      }
    `,
  ],
})
export class SimTypeComponent implements OnInit {
  @Input() tariff: ITariff;
  @Input() modal: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  openOrder(sim_type: "physical_sim" | "esim") {
    this.router.navigate(["/order"], {
      queryParams: { tariff_id: this.tariff.id, sim_type },
    });
    this.modal.dismiss();
  }
}
