import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../interface/registration-form.model';

const api = '/api'

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient) { }

  sendEmail(newUser: User) {
    return this.http.post<User>('/', newUser, { observe: 'response' });
  }
}
