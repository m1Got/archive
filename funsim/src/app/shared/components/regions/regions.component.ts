import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateComponent } from "../translate/translate.component";
import { FilterByFieldPipe } from "src/app/core/pipes";
import { ICountry } from "src/app/core/types";

@Component({
  standalone: true,
  selector: "app-regions",
  templateUrl: "./regions.component.html",
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateComponent,
    FilterByFieldPipe,
  ],
})
export class RegionsComponent implements OnInit {
  searchRegions: string;

  @Input() regions: ICountry[];
  @Input() modal: any;

  constructor() {}

  ngOnInit() {}
}
