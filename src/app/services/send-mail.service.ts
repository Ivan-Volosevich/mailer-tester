import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationFormInfo } from '../interface/registration-form.model';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  objFromService = {};

  // constructor() { }

  constructor(private http: HttpClient) { }

  sendEmail(objFromService: any): Observable<RegistrationFormInfo> {
    console.log('From services: ', this.http.post<RegistrationFormInfo>('http://localhost:4200/', objFromService))
    return this.http.post<RegistrationFormInfo>('http://localhost:4200/', objFromService)
  }
}
