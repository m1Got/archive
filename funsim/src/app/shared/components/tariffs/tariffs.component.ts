import { IonicModule, ModalController } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { SwiperModule } from "swiper/angular";
import { NgxMaskModule } from "ngx-mask";
import { TranslateModule } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import SwiperCore, { Navigation, SwiperOptions, Mousewheel } from "swiper";
import { ScrollingModule } from "@angular/cdk/scrolling";
import {
  Input,
  OnInit,
  OnChanges,
  Component,
  SimpleChanges,
} from "@angular/core";

import { TariffsStore } from "src/app/core/store";
import { TranslateComponent } from "../translate/translate.component";
import { FilterByFieldPipe } from "src/app/core/pipes";
import { ITariff } from "src/app/core/types";
import { RegionsComponent } from "../regions/regions.component";
import { SimTypeComponent } from "../sim-type/sim-type.component";
import { UntilDestroy } from "@ngneat/until-destroy";

SwiperCore.use([Navigation, Mousewheel]);

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-tariffs",
  standalone: true,
  templateUrl: "./tariffs.component.html",
  styleUrls: ["./tariffs.component.scss"],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SwiperModule,
    TranslateModule,
    NgxMaskModule,
    ScrollingModule,
    FilterByFieldPipe,
    TranslateComponent,
    ReactiveFormsModule,
  ],
})
export class TariffsComponent implements OnInit, OnChanges {
  @Input("apiUrl") apiUrlProps: string;
  @Input() slider: boolean;

  vmTariffs$ = this.tariffsStore.vm$;

  config: SwiperOptions = {
    lazy: true,
    observer: true,
    observeParents: true,
    spaceBetween: 20,
    slidesPerView: 1.2,
    navigation: {
      prevEl: "ion-fab-button[prev]",
      nextEl: "ion-fab-button[next]",
    },
  };

  constructor(
    private router: Router,
    private tariffsStore: TariffsStore,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.fetchTariffs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      !changes["apiUrlProps"].firstChange &&
      changes["apiUrlProps"].currentValue !==
        changes["apiUrlProps"].previousValue;

    if (isApiUrlChanged) {
      this.fetchTariffs();
    }
  }

  fetchTariffs() {
    this.tariffsStore.getTariffs(this.apiUrlProps);
  }

  async orderConclude(tariff: ITariff) {
    if (tariff.physical_sim && tariff.esim) {
      let modal;
      modal = await this.modalController.create({
        component: SimTypeComponent,
        backdropDismiss: true,
        showBackdrop: true,
        breakpoints: [0, 0.2],
        initialBreakpoint: 0.2,
        componentProps: { tariff, modal },
      });
      await modal.present();
    }
    if (!tariff.physical_sim || !tariff.esim) {
      let sim_type: "physical_sim" | "esim";
      if (tariff.physical_sim) sim_type = "physical_sim";
      if (tariff.esim) sim_type = "esim";

      this.router.navigate(["/order"], {
        queryParams: { tariff_id: tariff.id, sim_type },
      });
    }
  }

  async modalRegions(tariff: ITariff) {
    let modal;

    modal = await this.modalController.create({
      component: RegionsComponent,
      backdropDismiss: true,
      showBackdrop: true,
      componentProps: { regions: tariff.regions, modal },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
    }
  }
}
