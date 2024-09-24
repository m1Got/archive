import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.page.html",
})
export class FaqPage implements OnInit {
  faqs$ = this.apiService.queryFaqs();

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
