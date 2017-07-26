import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  // REGISTRATION FORM FIELDS
    firstName:      string;
    lastName:       string;
    userName:       string;
    email:          string;
    signupPassword: string;
    userCity:       string;
    userState:      string;
    userCountry:    string;
    userZip:        string;

  // ERROR MESSAGES
    errorMessage:      string;
    loginErrorMessage: string;

  // ACTIVE SESSION STATUS
    activeSession:     Boolean = false;


  constructor
  (
    private AuthOperator:  AuthService,
    private RouterControl: Router
  ) { }

  ngOnInit() {
  }

    // DISPLAY CONTROL
      register() {
        $('.ui.large.modal#register-form')
        .modal('show');
      }
      hideWindow() {
        $('.ui.modal').modal('hide');
        $('.ui.modal').modal('hideDimmer');
      }

    // FORM NAVIGATION
      continueToUserLocation() {
        $('.ui.modal#location-form').modal('show');
        $('.ui.modal#register-form').modal('hide');
      }
      backToCredentials() {
        $('.ui.modal#register-form').modal('show');
        $('.ui.modal#location-form').modal('hide');
      }

    // SUBMIT TO API
      submitRegistration() {
        this.AuthOperator.signup
        (
          this.firstName,
          this.lastName,
          this.userName,
          this.email,
          this.signupPassword,
          this.userCity,
          this.userState,
          this.userCountry,
          this.userZip
        )
        .then((apiReturn) => {
            alert(`Sign up successful. Welcome ${apiReturn.firstName} ${apiReturn.lastName}.`);
            console.log(apiReturn);

            // PURGE FORM FIELDS
            this.firstName      = '';
            this.lastName       = '';
            this.userName       = '';
            this.email          = '';
            this.signupPassword = '';
            this.userCity       = '';
            this.userState      = '';
            this.userCountry    = '';
            this.userZip        = '';

            // Redirect to Logged In Components
            // ** Array is a way of concatenating URLs.
            // each item would be a '/whatever' and can use variables in this way
        })
        .catch((err) => {
          const parsedError = err.json();
          this.errorMessage = parsedError.message;
          console.log(this.errorMessage);
        });
      }

}
