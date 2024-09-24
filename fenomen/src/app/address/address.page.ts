import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  changing = false;

  constructor() {}

  ngOnInit() {}

  onChange() {
    this.changing = !this.changing;
  }
}
