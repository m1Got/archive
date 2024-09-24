import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { TuiButtonModule, TuiExpandModule } from "@taiga-ui/core";

@Component({
  selector: "accordion",
  standalone: true,
  imports: [CommonModule, TuiExpandModule, TuiButtonModule],
  template: `
    <div
      (click)="expanded = !expanded"
      class="flex cursor-pointer items-center rounded-3xl bg-light p-3"
    >
      <h5 class="text-lg font-medium">{{ title }}</h5>
      <button
        size="m"
        tuiIconButton
        shape="rounded"
        icon="icons/chevron-bottom.svg"
        [appearance]="expanded ? 'primary' : 'whiteblock'"
        [ngStyle]="{ rotate: expanded ? '180deg' : '0deg' }"
        class="ml-auto"
      ></button>
    </div>
    <tui-expand [expanded]="expanded">
      <ng-template tuiExpandContent>
        <div class="mt-2 rounded-3xl text-dark bg-light p-[min(2vw,_20px)]">
          {{ content }}
        </div>
      </ng-template>
    </tui-expand>
  `,
})
export class AccordionComponent implements OnInit {
  @Input({ required: true }) title: string;
  @Input({ required: true }) content: string;

  expanded: boolean;
  constructor() {}

  ngOnInit() {}
}
