import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { API_URLS, ApiService } from "src/app/services/api.service";
import { AuthService } from "src/app/services/auth.service";
import { TariffsService } from "src/app/services/tariffs.service";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.page.html",
  styles: [
    `
      [tuiButton] {
        --tui-height-l: 4.5rem;
      }
    `,
  ],
})
export class OrderPage implements OnInit {
  address: string;
  payment: string = "humo";
  deliveryType: string = "pickup";
  agentControl: string;
  deliveryPrice: number = 15000;
  totalSumma: number = 0;

  tariffById: any;
  tariffsState$ = this.tariffsService.getTariffsState();
  isSubmitting$ = new BehaviorSubject(false);
  private orderDtoSubject$ = new BehaviorSubject<any>({});

  // ##########################

  path = API_URLS.main;
  changePassport: boolean;
  passportImage = new FormControl();
  isPassportValidate: boolean;
  offerCheckbox = new FormControl(false);

  formOrder = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(15)]],
    phone: ["", [Validators.required, Validators.pattern(/^\+\d{12}$/)]],
    email: ["", [Validators.required, Validators.email]],
  });

  constructor(
    public authService: AuthService,
    public utils: UtilsService,
    private tariffsService: TariffsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      const id = Number(queryParams["id"]);
      const type = queryParams["type"];

      type === "esim"
        ? this.updateOrderDto({ esim: 1, physical_sim: 0 })
        : this.updateOrderDto({ esim: 0, physical_sim: 1 });

      if (this.authService.isLoggedIn) {
        this.formOrder.patchValue({
          name: `${this.authService.currentUser.name ?? ""}`,
          phone: this.authService.currentUser.phone,
          email: this.authService.currentUser.email,
        });
        this.formOrder.get("phone").disable();

        if (!!this.authService.currentUser.passport_image) {
          this.isPassportValidate = true;
        }
      }

      this.tariffById = this.tariffsService.getTariffById(id);
      this.totalSumma = this.tariffById.price_sell;
    });
  }

  createOrder(template) {
    const deliveryType = this.deliveryType === "express" ? 0 : 1;
    const personalData = this.formOrder.getRawValue();
    const payment_type = this.payment !== "cash" ? this.payment : "cashuzs";
    const payment_method = this.payment !== "cash" ? 1 : 0;
    const tour_agent_id = this.agentControl === "office" ? 1 : 21;

    this.updateOrderDto({
      ...personalData,
      payment_type: payment_type,
      payment_method: payment_method,
      tour_agent_id: tour_agent_id,
      price: this.totalSumma,
      tariff_id: this.tariffById.id,
      delevery_type: deliveryType,
      address: this.address ?? "",
    });

    if (
      !!this.authService.currentUser.passport_image &&
      !this.passportImage.value
    ) {
      this.updateOrderDto({ passport: "" });
    }

    if (this.passportImage.value) {
      this.updateOrderDto({ passport: this.passportImage.value });
    }

    const order = this.orderDtoSubject$.getValue();
    const orderFormData = this.utils.formData(order);

    console.log(order);

    this.utils.odTemplate(template, { size: "m", closeable: false });

    this.isSubmitting$.next(true);

    this.apiService.createOrder(orderFormData).subscribe((response: any) => {
      if ("url" in response) {
        this.isSubmitting$.next(false);
        window.location.href = response.url;
      }
    });
  }

  isValidateOrder() {
    return (
      this.formOrder.invalid ||
      !this.payment ||
      !this.offerCheckbox.value ||
      (!this.isPassportValidate && !this.passportImage.value) ||
      (this.deliveryType === "pickup" && !this.agentControl) ||
      (this.deliveryType === "express" && !this.address)
    );
  }

  onChangePassport(template) {
    this.changePassport = true;
    this.isPassportValidate = false;
    template.complete();
  }

  onChangeDeliveryType(e) {
    if (e === "express") {
      this.totalSumma += this.deliveryPrice;
    } else {
      this.totalSumma -= this.deliveryPrice;
    }
  }

  private updateOrderDto(newState: any) {
    const currentState = this.orderDtoSubject$.getValue();
    const updatedState = { ...currentState, ...newState };
    this.orderDtoSubject$.next(updatedState);
  }
}
