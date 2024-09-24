import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { Store } from "@ngrx/store";
import { YaReadyEvent } from "angular8-yandex-maps";
import { Observable, filter, take } from "rxjs";
import { user } from "src/app/core/auth";
import { ApiQueryService, AuthService } from "src/app/core/services";
import { OrderStore } from "src/app/core/store";
import { IAgent, IOrder, ITariff } from "src/app/core/types";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-order",
  templateUrl: "./order.page.html",
  styleUrls: ["./order.page.scss"],
  providers: [OrderStore],
})
export class OrderPage implements OnInit {
  private map: ymaps.Map;
  private objects;
  private points = [];
  center: [number, number];
  zoom = 5;

  deliveryType: "pickup" | "delivery" = "pickup";
  paymentMethod: "cash" | "online" = "cash";

  agent: IAgent;
  order: IOrder;
  queryParams: Params;

  queryTariff$: Observable<any>;
  isSubmitting$ = this.orderStore.submitting$;
  queryAgents$ = this.apiQueryService.getAgents();

  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    phone: ["", [Validators.required, Validators.pattern(/[7]{1}[0-9]{10}$/)]],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private orderStore: OrderStore,
    private apiQueryService: ApiQueryService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.form.setValue({
        name: this.authService.currentUser.name,
        phone: this.authService.currentUser.phone,
      });
    }
    this.route.queryParams.subscribe((params: Params) => {
      this.queryParams = params;
      this.queryTariff$ = this.apiQueryService.getTariff(params["tariff_id"]);
    });
  }

  initializeOrder(tariff: ITariff) {
    this.order = {
      ...this.order,
      ...this.form.getRawValue(),
      tariff_id: tariff.id,
      price: tariff.price_sell,
      [this.queryParams["sim_type"]]: 1,
      region_group_id: [`${tariff.region_group_id}`],
      tour_agent_id: this.deliveryType === "pickup" ? this.agent?.id : 1,
      payment_method: this.paymentMethod === "cash" ? 0 : 1,
      delevery_type: this.deliveryType === "pickup" ? 0 : 1,
      payment_type: 0,
      user_id: 22,
    };
  }

  onMapReady({ target }: YaReadyEvent<ymaps.Map>, agents: IAgent[]): void {
    this.map = target;
    let objects;
    agents.map((agent) =>
      this.points.push({
        type: "Point",
        coordinates: [agent.longtitude, agent.latitude],
        balloonContent: `${agent.title} ${agent.address}`,
      })
    );
    objects = ymaps.geoQuery([...this.points]);
    this.objects = objects;
    objects.searchInside(target).addToMap(target);
  }

  setCenterMap(agent: IAgent) {
    if (!agent.latitude || !agent.longtitude) return;

    this.center = [+agent.longtitude, +agent.latitude];
    this.zoom = 14;
  }

  onBoundsChange(): void {
    var visibleObjects = this.objects.searchInside(this.map).addToMap(this.map);
    this.objects.remove(visibleObjects).removeFromMap(this.map);
  }

  sendAgent(agent: IAgent, pointsModal) {
    this.agent = agent;
    pointsModal.dismiss();
  }

  onSubmit(tariff: ITariff) {
    this.initializeOrder(tariff);
    this.orderStore.crateOrder({
      url: "/createOrder",
      order: this.order,
      redirect: this.paymentMethod === "online",
    });
  }
}
