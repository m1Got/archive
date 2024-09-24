import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiQueryService } from "src/app/core/services";
import { DeviceTypeComponent } from "src/app/shared/components";

@Component({
  selector: "app-simcards",
  templateUrl: "./simcards.page.html",
  styleUrls: ["./simcards.page.scss"],
})
export class SimcardsPage implements OnInit {
  querySimcards$ = this.apiQueryService.getSimcards();
  constructor(
    private apiQueryService: ApiQueryService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  async checkBalance() {
    let modal;

    modal = await this.modalController.create({
      component: DeviceTypeComponent,
      backdropDismiss: true,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      showBackdrop: true,
      cssClass: 'auto-height',
      componentProps: { },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
    }
  }
}
