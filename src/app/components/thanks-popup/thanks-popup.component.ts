import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, interval } from 'rxjs';
import { ThanksPopupService } from '../../services/thanks-popup/thanks-popup.service'

@Component({
  selector: 'app-thanks-popup',
  templateUrl: './thanks-popup.component.html',
  styleUrls: ['./thanks-popup.component.scss']
})
export class ThanksPopupComponent implements OnInit, OnDestroy {
  counter = 10;

  private subscription: Subscription = new Subscription;

  constructor(public dialog: MatDialog, private thanksPopupService: ThanksPopupService) { }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(x => {
      this.counter--;
      console.log('counter: ', this.counter)
      if(this.counter === 0) {
        this.dialog.closeAll();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
