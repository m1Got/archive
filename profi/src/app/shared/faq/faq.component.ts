import { Component, OnInit } from "@angular/core";
import { AccordionComponent } from "src/app/shared/accordion/accordion.component";

@Component({
  standalone: true,
  selector: "app-faq",
  imports: [AccordionComponent],
  template: `
    <div class="container">
      <div class="mb-[min(3vw,_30px)] flex items-center">
        <h3 class="title">Часто задаваемые вопросы</h3>
      </div>
      <div class="grid gap-[min(2vw,_20px)] md:grid-cols-2">
        <accordion
          title="Что такое профи24.уз"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <accordion
          title="Как повысить рейтинг профиля?"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <accordion
          title="Как пополнить «Кошелек» в личном кабинете?"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
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
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
