import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.page.html',
  styleUrls: ['./allorders.page.scss'],
})
export class AllordersPage implements OnInit {
  activeSegment: string = 'active';
  constructor() {}

  ngOnInit() {}
}
