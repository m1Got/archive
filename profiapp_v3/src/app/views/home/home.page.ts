import { Component, OnInit, inject } from '@angular/core';
import { TuiSheetDialogService } from '@taiga-ui/addon-mobile';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  rangeArray = Array.from({ length: 8 });

  authService = inject(AuthService);
  utilsService = inject(UtilsService);
  tuiSheetDialogService = inject(TuiSheetDialogService);

  constructor() {}

  ngOnInit() {}
}
