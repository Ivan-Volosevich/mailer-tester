import { Component, OnInit } from '@angular/core';
import { ThanksPopupComponent } from '../thanks-popup/thanks-popup.component';
import { ThanksPopupService } from '../../services/thanks-popup/thanks-popup.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private thanksPopupService: ThanksPopupService,
  ) { }

  openThanksPopupReq() {
    this.thanksPopupService.openThanksPopup(ThanksPopupComponent)
  }

  ngOnInit(): void {
  }

}
