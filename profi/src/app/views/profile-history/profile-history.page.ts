import { Component, OnInit, inject } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-profile-history",
  templateUrl: "./profile-history.page.html",
})
export class ProfileHistoryPage implements OnInit {
  authService = inject(AuthService);

  historyActiveItems = Array.from({ length: 2 });
  
  activeTab: "new" | "completed" = "new";
  orders = [
    // {
    //   id: 2154789,
    //   name: "Азимжон Т",
    //   category: "Уборка",
    //   order_date: "01.02.2023",
    //   complete_date: "",
    //   status: 2,
    // },
    // {
    //   id: 2154789,
    //   name: "Азимжон Т",
    //   category: "Уборка",
    //   order_date: "01.02.2023",
    //   complete_date: "",
    //   status: 3,
    // },
  ];

  columns = ["id", "name", "category", "order_date", "complete_date", "status"];

  constructor() {}

  ngOnInit() {}
}
