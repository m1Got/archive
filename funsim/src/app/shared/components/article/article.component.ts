import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-article",
  templateUrl: "./article.component.html",
  imports: [CommonModule, IonicModule],
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent {
  @Input() image = "/assets/imgs/bg-image-05.jpg";
  @Input() innerTitle = "";
  @Input() outerTitle = "";
  @Input() text = "";
}
