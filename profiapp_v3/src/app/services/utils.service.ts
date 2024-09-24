import { Injectable, inject } from '@angular/core';
import {
  TuiMobileDialogService,
  TuiSheetDialogService,
} from '@taiga-ui/addon-mobile';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  sheetService = inject(TuiSheetDialogService);
  mobileDialogService = inject(TuiMobileDialogService);

  constructor() {}

  odTemplate(template) {
    this.sheetService.open(template, { closeable: true }).subscribe({});
  }

}
