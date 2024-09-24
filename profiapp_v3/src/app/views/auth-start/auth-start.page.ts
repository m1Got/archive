import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swiper, { Controller, Pagination } from 'swiper';

Swiper.use([Pagination, Controller]);

@Component({
  selector: 'app-auth-start',
  templateUrl: './auth-start.page.html',
  styleUrls: ['./auth-start.page.scss'],
})
export class AuthStartPage implements OnInit {
  activeIndex: number;

  router = inject(Router);

  constructor() {}

  ngOnInit() {}
}
