import { Component, OnInit, inject } from '@angular/core';
import { AlertButton, NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  navCtrl = inject(NavController);
  utilsService = inject(UtilsService);

  lng: string = 'ru';
  map: string = 'map_1';

  logoutButtons = [
    {
      text: 'Отмена',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Выход',
      role: 'danger',
      handler: () => {},
    },
  ];

  accountDeleteButtons = [
    {
      text: 'Отмена',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Удалить',
      role: 'danger',
      handler: () => {},
    },
  ];

  constructor() {}

  ngOnInit() {}
}
