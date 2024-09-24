import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

@Component({
  selector: 'app-advertimages',
  templateUrl: './advertimages.page.html',
  styleUrls: ['./advertimages.page.scss'],
})
export class AdvertimagesPage implements OnInit {
  navCtrl = inject(NavController);
  constructor() {}

  ngOnInit() {}
}
