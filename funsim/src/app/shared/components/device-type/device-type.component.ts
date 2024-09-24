import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateComponent } from "../translate/translate.component";

@Component({
  standalone: true,
  selector: "app-device-type",
  templateUrl: "./device-type.component.html",
  imports: [CommonModule, IonicModule, TranslateComponent],
  styles: [
    `
      section {
        height: 250px;
      }
      ion-row {
        gap: 10px;
        display: flex;
      }
      ion-row img {
        width: 55px;
        height: 55px;
        object-fit: contain;
        margin-right: 15px;
      }
      ion-row > ion-button {
        flex: 1 1 auto;
      }
      ion-text {
        font-size: 20px;
        text-align: center;
      }
    `,
  ],
})
export class DeviceTypeComponent implements OnInit {
  deviceType: "iphone" | "android";
  constructor() {}

  ngOnInit() {}
}
