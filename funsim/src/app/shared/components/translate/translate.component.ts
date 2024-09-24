import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { TranslateService } from "@ngx-translate/core";
import { PersistanceService } from "src/app/core/services";

@UntilDestroy({ checkProperties: true })
@Component({
  standalone: true,
  selector: "translate",
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="lng">
      <ng-container *ngSwitchCase="'ru'">{{ nameRU }}</ng-container>
      <ng-container *ngSwitchCase="'en'">{{ nameEN }}</ng-container>
      <ng-container *ngSwitchCase="'kz'">{{ nameKZ }}</ng-container>
      <ng-container *ngSwitchDefault>{{ nameRU }}</ng-container>
    </ng-container>
  `,
})
export class TranslateComponent implements OnInit {
  @Input() nameRU = "";
  @Input() nameEN = "";
  @Input() nameKZ = "";

  lng = this.persistanceService.get("lng");

  constructor(
    private translateService: TranslateService,
    private persistanceService: PersistanceService
  ) {}

  ngOnInit() {
    this.translateService.onLangChange.subscribe((value) => {
      this.lng = value.lang;
    });
  }
}
