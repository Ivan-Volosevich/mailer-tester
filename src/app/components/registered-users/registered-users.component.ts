import { Component, OnInit } from '@angular/core';
import { SendMailService } from '../../services/send-mail.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {
  users: any = [];
  constructor(private sendMailService: SendMailService) { }


  ngOnInit() { }

}
