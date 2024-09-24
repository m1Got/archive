import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TuiMobileDialogService } from '@taiga-ui/addon-mobile';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  tariff;

  userRoleButtons = [
    {
      text: 'Нет',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Да',
      role: 'confirm',
      handler: () => {
        this.authService.role === 'executor'
          ? (this.authService.role = 'client')
          : (this.authService.role = 'executor');
      },
    },
  ];

  authService = inject(AuthService);
  utilsService = inject(UtilsService);

  constructor() {}

  ngOnInit() {}
}
