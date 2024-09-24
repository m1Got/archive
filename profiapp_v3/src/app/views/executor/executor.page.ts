import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-executor',
  templateUrl: './executor.page.html',
  styleUrls: ['./executor.page.scss'],
})
export class ExecutorPage implements OnInit {
  arrayItems = Array.from({ length: 5 });

  activeSegment: string = 'first';

  utilsService = inject(UtilsService);
  navCtrl = inject(NavController);

  constructor() {}

  ngOnInit() {}
}
