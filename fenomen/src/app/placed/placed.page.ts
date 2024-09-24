import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-placed',
  templateUrl: './placed.page.html',
  styleUrls: ['./placed.page.scss'],
})
export class PlacedPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  back() {
    this.navCtrl.back({});
  }
}
