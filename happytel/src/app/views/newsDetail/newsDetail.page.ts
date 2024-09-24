import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { API_URLS, ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-newsDetail",
  templateUrl: "./newsDetail.page.html",
})
export class NewsDetailPage implements OnInit {
  path = API_URLS.main;

  slug = this.route.snapshot.paramMap.get("id");
  tiding$ = this.apiService.queryNewsById(this.slug);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}

  ngOnInit() {}
}
