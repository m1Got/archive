import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-advertcreate',
  templateUrl: './advertcreate.page.html',
  styleUrls: ['./advertcreate.page.scss'],
})
export class AdvertcreatePage implements OnInit {
 

  
  navCtrl = inject(NavController);

  constructor() {}

  ngOnInit() {}
}
