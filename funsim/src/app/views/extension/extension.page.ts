import { Component, OnInit } from "@angular/core";
import {
  ApiQueryService,
  ApiService,
  UtilsService,
} from "src/app/core/services";
import { ISimcard } from "src/app/core/types";

@Component({
  selector: "app-extension",
  templateUrl: "./extension.page.html",
  styleUrls: ["./extension.page.scss"],
})
export class ExtensionPage implements OnInit {
  querySimcards$ = this.apiQueryService.getSimcards();

  extSimcard: ISimcard = {
    id: 1,
    region_group_id: 1,
    plan_id: 1
  };

  extensionAlertButtons = [
    {
      text: "Отмена",
      role: "cancel",
    },
    {
      text: "Да",
      role: "confirm",
      handler: () => {
        this.apiService
          .extSimcard({
            id: this.extSimcard.id,
            regionID: this.extSimcard.region_group_id,
            planID: this.extSimcard.plan_id,
          })
          .subscribe((response) =>
            this.utilsService.presentToast(`${response}`)
          );
      },
    },
  ];
  constructor(
    private apiQueryService: ApiQueryService,
    private apiService: ApiService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {}

  extensionRequest() {}
}
