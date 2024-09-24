import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  activePayment: string = 'click';

  navCtrl = inject(NavController);
  constructor() {}

  ngOnInit() {}
}
