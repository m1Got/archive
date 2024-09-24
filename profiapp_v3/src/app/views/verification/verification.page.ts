import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  passportType: string = 'idCard'

  navCtrl = inject(NavController);
  utilsService = inject(UtilsService)

  constructor() {}

  ngOnInit() {}
}
