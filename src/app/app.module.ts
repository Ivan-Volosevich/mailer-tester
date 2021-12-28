import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RequestComponent } from './components/request/request.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { ThanksPopupComponent } from './components/thanks-popup/thanks-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    RequestComponent,
    RegisteredUsersComponent,
    ThanksPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
