import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.page.html',
  styleUrls: ['./protection.page.scss'],
})
export class ProtectionPage implements OnInit {
  navCtrl = inject(NavController);
  utilsService = inject(UtilsService);
  
  constructor() {}

  ngOnInit() {}
}
