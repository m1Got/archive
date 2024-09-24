import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile-orders",
  templateUrl: "./profile-orders.page.html",
})
export class ProfileOrdersPage implements OnInit {
  orders = [
    {
      id: 2154789,
      name: "Азимжон Т",
      category: "Уборка",
      order_date: "01.02.2023",
      complete_date: "",
      status: 1,
    },
    {
      id: 2154789,
      name: "Азимжон Т",
      category: "Уборка",
      order_date: "01.02.2023",
      complete_date: "",
      status: 1,
    },
  ];

  columns = ["id", "name", "category", "order_date", "complete_date", "status"];

  constructor() {}

  ngOnInit() {}
}
