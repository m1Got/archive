import { Component, OnInit } from "@angular/core";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-docs-confident",
  templateUrl: "./docs-confident.page.html",
})
export class DocsConfidentPage implements OnInit {

  constructor(public utils: UtilsService) {}

  ngOnInit() {}
}
