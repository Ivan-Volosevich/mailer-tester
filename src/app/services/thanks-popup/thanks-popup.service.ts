import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThanksPopupService {

  constructor(public dialog: MatDialog) { }

  openThanksPopup(popupComponent: any) {
    this.dialog.open(popupComponent);
  }
}


