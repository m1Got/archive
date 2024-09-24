import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.page.html',
  styleUrls: ['./speciality.page.scss'],
})
export class SpecialityPage implements OnInit {
  navCtrl = inject(NavController);
  
  constructor() {}

  ngOnInit() {}
}
