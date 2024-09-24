import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TuiButtonModule, TuiExpandModule } from '@taiga-ui/core';

@Component({
  selector: 'accordion',
  standalone: true,
  imports: [CommonModule, TuiExpandModule, TuiButtonModule],
  styleUrl: './accordion.component.scss',
  template: `
    <div
      class="accordion-item"
      [ngClass]="{ outlined: isOutline }"
      (click)="expanded = !expanded"
    >
      <ng-container *ngIf="image">
        <img class="accordion-item__image" [src]="image" />
      </ng-container>
      <h5 class="accordion-item__title" [ngClass]="{ outlined: isOutline }">
        {{ title }}
      </h5>
      <button
        size="xs"
        tuiIconButton
        shape="rounded"
        icon="assets/icons/chevron-down-outline.svg"
        [appearance]="expanded ? 'primary' : 'whiteblock-active'"
        [ngStyle]="{ rotate: expanded ? '180deg' : '0deg' }"
      ></button>
    </div>
    <tui-expand [expanded]="expanded">
      <ng-template tuiExpandContent>
        <ng-container *ngIf="isOutline">
          <div
            class="accordion-item__content"
            [ngClass]="{ outlined: isOutline }"
          >
            {{ text }}
          </div>
        </ng-container>
        <ng-container *ngIf="!isOutline">
          <ng-content></ng-content>
        </ng-container>
      </ng-template>
    </tui-expand>
  `,
})
export class AccordionComponent implements OnInit {
  @Input({}) image: string;
  @Input({}) isOutline: boolean;
  @Input({}) text: string;
  @Input({ required: true }) title: string;

  expanded: boolean;
  constructor() {}

  ngOnInit() {}
}
