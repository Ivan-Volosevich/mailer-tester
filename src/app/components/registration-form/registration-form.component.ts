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
  constructor(public dialog: MatDialog, private sendmailservice: SendMailService) {}

  registrationForm = new FormGroup({
    registrationUserId: new FormControl(null),
    registrationFirstName: new FormControl(null),
    registrationLastName: new FormControl(null),
    registrationEmail: new FormControl(null),
    registrationAge: new FormControl(null),
    registrationPhone: new FormControl(null, [Validators.required, Validators.minLength(12), Validators.maxLength(15)]),
  })

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.sendmailservice.getUsers().subscribe(users => {
      this.users = users;
      console.log('Users from get: ', users)
    });
  }

  submitRegistration() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
    } else {
      this.registrationForm.value['registrationUserId'] = this.registrationForm.value['registrationLastName'] + new Date().getTime()
      console.log('from submitRegistration(): ', this.registrationForm.value);
      // this.sendmailservice.sendEmail(this.registrationForm.value)
      // this.sendmailservice.objFromService = this.registrationForm.value;

      this.sendmailservice.sendEmail(this.registrationForm.value).subscribe(newUser => {
        console.log('before push: ', this.users)
        this.users = this.users.push(newUser);
        console.log('after push: ', this.users)
      })

      this.getUsers();

      return this.registrationForm.value;
    }
  }

}
