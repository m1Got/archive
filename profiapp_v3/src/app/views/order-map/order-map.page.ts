import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-map',
  templateUrl: './order-map.page.html',
  styleUrls: ['./order-map.page.scss'],
})
export class OrderMapPage implements OnInit {
  navCtrl = inject(NavController);

  constructor() {}

  ngOnInit() {}
}
