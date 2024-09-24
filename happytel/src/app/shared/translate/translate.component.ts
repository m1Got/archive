import { Component, Input } from "@angular/core";
import { TranslateService } from "./translate.service";

@Component({
  selector: "translate",
  template: `
    <ng-container *ngIf="currentLanguage$ | async as currentLanguage">
      <ng-container [ngSwitch]="currentLanguage">
        <ng-container *ngSwitchCase="'ru'">{{ ru }}</ng-container>
        <ng-container *ngSwitchCase="'uz'">{{ uz }}</ng-container>
        <ng-container *ngSwitchDefault>{{ ru }}</ng-container>
      </ng-container>
    </ng-container>
  `,
})
export class TranslateComponent {
  @Input() ru: string = "";
  @Input() uz: string = "";

  currentLanguage$ = this.translateService.getLanguage();

  constructor(public translateService: TranslateService) {}
}
