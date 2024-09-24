import { CommonModule } from "@angular/common";

import {
  TuiButtonModule,
  TuiDialogModule,
  TuiDialogContext,
  TuiDialogCloseService,
} from "@taiga-ui/core";
import { TuiAvatarModule } from "@taiga-ui/kit";
import { SwiperOptions } from "swiper";
import { SwiperModule } from "swiper/angular";
import {
  TuiPreviewModule,
  TuiPreviewDialogService,
} from "@taiga-ui/addon-preview";
import { OnInit, inject, Component, TemplateRef } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { IonicModule } from "@ionic/angular";
import { interval, map, startWith, take, tap } from "rxjs";

@UntilDestroy({ checkProperties: true })
@Component({
  standalone: true,
  selector: "app-stories",
  imports: [
    IonicModule,
    CommonModule,
    SwiperModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiPreviewModule,
    TuiDialogModule,
  ],
  templateUrl: "./stories.component.html",
  providers: [TuiDialogCloseService],
})
export class StoriesComponent implements OnInit {
  stories = Array.from({ length: 15 });

  progress = 0;
  progress$ = interval(100).pipe(
    take(100),
    startWith(0),
    map((i) => i + 1),
    tap(() => (this.progress += 0.01)),
  );

  config: SwiperOptions = {
    freeMode: true,
    spaceBetween: 15,
    breakpoints: {
      0: { slidesPerView: 3.3 },
      320: { slidesPerView: 4.3 },
      480: { slidesPerView: 5.5 },
      640: { slidesPerView: 7.5 },
      768: { slidesPerView: 8.5 },
      992: { slidesPerView: 9.5 },
      1200: { slidesPerView: 11.5 },
    },
  };

  previewDialogService = inject(TuiPreviewDialogService);

  ngOnInit() {}

  show(index: number, content: TemplateRef<TuiDialogContext>): void {
    this.progress$.subscribe({ complete: () => (this.progress = 0) });
    this.previewDialogService.open(content || "").subscribe();
  }
}
