import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TuiButtonModule, TuiExpandModule } from "@taiga-ui/core";

@Component({
  selector: "app-accordion",
  standalone: true,
  imports: [CommonModule, TuiExpandModule, TuiButtonModule, IonicModule],
  template: `
    <ion-card class="rounded-2xl p-5">
      <div
        class="flex cursor-pointer items-center"
        (click)="expanded = !expanded"
      >
        <h5 class="text-xl font-bold text-dark">{{ title }}</h5>
        <button
          class="ml-auto p-2"
          [ngStyle]="{ rotate: expanded ? '180deg' : '0deg' }"
        >
          <ion-icon
            class="text-xl"
            [color]="expanded ? 'primary' : 'whiteblock'"
            src="icons/chevron-down.svg"
          />
        </button>
      </div>
      <tui-expand [expanded]="expanded">
        <ng-template tuiExpandContent>
          <p class="text-lg text-medium">{{ content }}</p>
        </ng-template>
      </tui-expand>
    </ion-card>
  `,
})
export class AccordionComponent implements OnInit {
  @Input({ required: true }) title: string;
  @Input({ required: true }) content: string;

  expanded: boolean;
  constructor() {}

  ngOnInit() {}
}
