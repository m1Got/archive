import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-myadverts',
  templateUrl: './myadverts.page.html',
  styleUrls: ['./myadverts.page.scss'],
})
export class MyadvertsPage implements OnInit {
  activeSegment: string = 'first';

  navCtrl = inject(NavController);
  utilsService = inject(UtilsService);

  constructor() {}

  ngOnInit() {}
}
