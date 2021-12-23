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
  users: any = [];
  public subscription!: Subscription;
  constructor(public dialog: MatDialog, private sendMailService: SendMailService) {}

  registrationForm = new FormGroup({
    formName: new FormControl('Registration form from Main'),
    registrationUserId: new FormControl(null),
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
      this.registrationForm.value['registrationUserId'] = this.registrationForm.value['registrationLastName'] + new Date().getTime();
      this.registrationForm.value['registrationPhone'] = +this.registrationForm.value['registrationPhone'];
      this.sendMailService.sendEmail(this.registrationForm.value).subscribe();
      return this.registrationForm.value;
    }
  }

  getStatus() {
    this.sendMailService.getStatus().subscribe(
      (res) => {
        if (res.status === 200) {
          console.log(res)
        } else {
          console.log('err: ', res)
        }
      }
    )
  }

}
