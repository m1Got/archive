import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  activeSegment = 'first';
  arrayItems = Array.from({ length: 6 });

  navCtrl = inject(NavController);

  constructor() {}

  ngOnInit() {}
}
