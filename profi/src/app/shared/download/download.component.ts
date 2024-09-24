import { Component, OnInit } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-download",
  imports: [],
  template: `
    <div class="container">
      <div
        class="grid gap-10 rounded-[--rounded-lg] bg-light px-[min(5vw,_70px)] md:grid-cols-2"
      >
        <div class="flex flex-col justify-center py-[min(5vw,_50px)] md:mr-10">
          <h3 class="title mb-5">Все эксперты в одном приложении.</h3>
          <p class="pb-[min(4vw,_40px)] text-lg text-dark">
            Скачайте бесплатно и заказывайте услуги в удобное для вас время
          </p>
          <div class="grid grid-cols-2 gap-4 md:mr-10">
            <a href="#" target="_blank">
              <img class="w-full" src="images/app-store.svg" alt="" />
            </a>
            <a href="#" target="_blank">
              <img class="w-full" src="images/app-play-market.svg" alt="" />
            </a>
          </div>
        </div>
        <div class="flex items-end pt-[min(3vw,_30px)]">
          <div class="w-full max-w-[400px]">
            <img class="h-full w-full" src="images/profi-app.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-block: min(4vw, 40px);
      }
    `,
  ],
})
export class DownloadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
