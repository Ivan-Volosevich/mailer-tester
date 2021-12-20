import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendMailService } from 'src/app/services/send-mail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public subscription!: Subscription;
  constructor(public dialog: MatDialog, private sendmailservice: SendMailService) {}

  registrationForm = new FormGroup({
    registrationFirstName: new FormControl(null),
    registrationLastName: new FormControl(null),
    registrationEmail: new FormControl(null),
    registrationAge: new FormControl(null),
    registrationPhone: new FormControl(null, [Validators.required, Validators.minLength(12), Validators.maxLength(15)]),
  })

  ngOnInit(): void {}

  submitRegistration() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
    } else {
      console.log('from submitRegistration(): ', this.registrationForm.value);
      // this.sendmailservice.sendEmail(this.registrationForm.value)
      // this.sendmailservice.objFromService = this.registrationForm.value;
    this.sendmailservice.sendEmail(this.registrationForm.value)

      return this.registrationForm.value;
    }
  }

}
