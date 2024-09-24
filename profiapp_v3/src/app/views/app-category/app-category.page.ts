import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-app-category',
  templateUrl: './app-category.page.html',
  styleUrls: ['./app-category.page.scss'],
})
export class AppCategoryPage implements OnInit {
  navCtrl = inject(NavController);

  constructor() {}

  ngOnInit() {}
}
