import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.page.html',
  styleUrls: ['./advertise.page.scss'],
})
export class AdvertisePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  back() {
    this.navCtrl.back({});
  }

  addToFavorites() {}
}
