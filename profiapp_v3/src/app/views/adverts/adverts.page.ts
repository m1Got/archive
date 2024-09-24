import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.page.html',
  styleUrls: ['./adverts.page.scss'],
})
export class AdvertsPage implements OnInit {
  rating: number
  rangeArray = Array.from({ length: 8 });

  utilsService = inject(UtilsService)
  navCtrl = inject(NavController);
  constructor() { }

  ngOnInit() {
  }

}
