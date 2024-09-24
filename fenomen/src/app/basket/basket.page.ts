import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit, AfterViewInit {
  activeTab = 'pickup';

  basketItems = true;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  addToFavorites() {}

}
