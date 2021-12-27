import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendMailService } from 'src/app/services/send-mail.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  users: any = [];
  // public subscription!: Subscription;
  statusOfSending: any = 200;

  constructor(public dialog: MatDialog, private sendMailService: SendMailService) {}

  registrationForm = new FormGroup({
    formName: new FormControl('Registration form from Main'),
    registrationUserId: new FormControl(null),
    registrationFirstName: new FormControl(null),
    registrationLastName: new FormControl(null),
    registrationEmail: new FormControl(null),
    // registrationEmail: new FormControl(null, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    registrationPhone: new FormControl(null, [Validators.required, Validators.minLength(12), Validators.maxLength(15)]),
  })

  ngOnInit(): void {}

  submitRegistration() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
    } else {
      this.registrationForm.value['registrationUserId'] = this.registrationForm.value['registrationLastName'] + "-" + (new Date().getTime()).toString().slice(-6);
      this.registrationForm.value['registrationPhone'] = +this.registrationForm.value['registrationPhone'];
      this.sendMailService.sendEmail(this.registrationForm.value).subscribe();
      this.getStatus();
      // console.log(this.registrationForm.value)
      // console.log('response: ', Response)
      return this.registrationForm.value;
    }
  }

  async getStatus() {
    (await this.sendMailService.getStatus()).subscribe(
      (res) => {
        console.log('status: ', res)
        if (res.status === 200) {
          this.statusOfSending = res.status;
          this.dialog.closeAll();
        } else {
          this.statusOfSending = res.status;
        }
      }
    )
  }

}
