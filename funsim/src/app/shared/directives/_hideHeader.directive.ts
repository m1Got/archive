import {
  Directive,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";
import { DomController } from "@ionic/angular";

@Directive({ selector: "[appHideHeader]", standalone: true })
export class HideHeaderDirective implements OnInit {
  @Input({ alias: "appHideHeader", required: true }) header: any;
  private headerHeight = 44;
  constructor(private renderer: Renderer2, private domCtrl: DomController) {}

  ngOnInit(): void {
    this.header = this.header.el;
    this.domCtrl.read(() => {
      this.headerHeight = this.header.clientHeight;
    });
  }

  @HostListener("ionScroll", ["$event"]) onContentScroll($event) {
    const scrollTop = $event.detail.scrollTop;
    let newPosition = -(scrollTop / 5);

    if (newPosition < -this.headerHeight) {
      newPosition = -this.headerHeight;
    }

    let newOpacity = 1 - newPosition / -this.headerHeight;

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, "top", `${newPosition}px`);
      this.renderer.setStyle(this.header, "opacity", newOpacity);
    });
  }
}
