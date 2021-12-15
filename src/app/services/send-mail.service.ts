import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationFormComponent } from '../components/registration-form/registration-form.component';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor() { }
  // constructor(private http: HttpClient) { }

  // sendEmail(obj: any): Observable<RegistrationFormComponent> {
  //   console.log('From services')
  //   return this.http.post<RegistrationFormComponent>('http://localhost:4200/', obj)
  // }
}
