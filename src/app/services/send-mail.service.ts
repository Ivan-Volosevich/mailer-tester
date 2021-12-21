import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/registration-form.model';

const api = '/api'

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  objFromService = {};

  // constructor() { }

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Array<User>>(`${api}/data/users`);
  }

  // deleteUser(user: User) {
  //   return this.http.delete(`${api}/user/${user.registrationLastName}`);
  // }

  // addUser(user: User) {
  //   return this.http.post<User>(`${api}/user`, user);
  // }

  // updateUser(user: User) {
  //   return this.http.put<User>(`${api}/user/${user.registrationLastName}`, user)
  // }

  // sendEmail(objFromService: any): Observable<User> {
  //   // console.log('From services: ', this.http.post<User>('http://localhost:3000/', objFromService))
  //   // return this.http.post<User>('http://localhost:3000/', objFromService)
  //   return this.http.post<User>(`${api}/data/users`, objFromService);
  // }

  sendEmail(newUser: any) {
    console.log('this post from Services!', newUser)
    return this.http.post<Array<User>>(`${api}/data/users`, newUser);
  }
}
