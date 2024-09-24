import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-myorders-history',
  templateUrl: './myorders-history.page.html',
  styleUrls: ['./myorders-history.page.scss'],
})
export class MyordersHistoryPage implements OnInit {
  navCtrl = inject(NavController);
  constructor() {}

  ngOnInit() {}
}
