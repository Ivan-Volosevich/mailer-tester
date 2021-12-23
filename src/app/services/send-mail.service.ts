import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/registration-form.model';

const api = '/api'

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  objFromService = {};

  constructor(private http: HttpClient) { }

  sendEmail(newUser: User) {
    console.log('this post from Services!', newUser)
    return this.http.post<User>('/', newUser);
  }

  getStatus() {
    return this.http.post('/', null, { observe: 'response' });
  }
}

