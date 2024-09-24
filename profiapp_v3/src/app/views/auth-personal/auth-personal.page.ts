import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-personal',
  templateUrl: './auth-personal.page.html',
  styleUrls: ['./auth-personal.page.scss'],
})
export class AuthPersonalPage implements OnInit {
  type: string;

  constructor() { }

  ngOnInit() {
  }

}
