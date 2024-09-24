import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addresscreate',
  templateUrl: './addresscreate.page.html',
  styleUrls: ['./addresscreate.page.scss'],
})
export class AddresscreatePage implements OnInit {
  navCtrl = inject(NavController);
  
  constructor() {}

  ngOnInit() {}
}
