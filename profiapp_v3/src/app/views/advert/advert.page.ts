import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

@Component({
  selector: 'app-advert',
  templateUrl: './advert.page.html',
  styleUrls: ['./advert.page.scss'],
})
export class AdvertPage implements OnInit {
  arrayItems = Array.from({ length: 5 });

  activeSegment: string = 'first';

  navCtrl = inject(NavController);
  utilsService = inject(UtilsService);

  constructor() {}

  ngOnInit() {}
}
