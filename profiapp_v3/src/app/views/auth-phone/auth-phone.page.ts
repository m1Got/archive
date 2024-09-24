import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-phone',
  templateUrl: './auth-phone.page.html',
  styleUrls: ['./auth-phone.page.scss'],
})
export class AuthPhonePage implements OnInit {

  discount = new FormControl(false)

  constructor() { }

  ngOnInit() {
  }

}
