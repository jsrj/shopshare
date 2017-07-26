import { AuthService       } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent      } from '../app.component';
import { Router            } from '@angular/router';
import { FileUploader      } from 'ng2-file-upload';
import { environment       } from '../../environments/environment';
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    myCoolUploader = new FileUploader({
      url: `${environment.apiBase}/auth/userUploads`
    });

  // ACTIVE SESSION STATE
    activeSession: boolean;

  // LOGIN FORM FIELDS
    loginEmail:    string;
    loginPassword: string;
    clientUser: any = {};

  constructor
  (
    private AuthOperator:  AuthService,
    private RouterControl: Router
  ) { }

  ngOnInit() {
  }

  hideWindow() {
    $('.ui.modal').modal('hide');
    $('.ui.modal').modal('hideDimmer');
  }

      // SUBMIT TO API
  loginUser(loginEmail, loginPassword) {
    this.AuthOperator.login
    (
      loginEmail,
      loginPassword
    )
    .then((apiReturn) => {
        this.AuthOperator.checkSession()
          .then((sessionUser) => {
          this.clientUser = sessionUser;
          this.activeSession = true;
        $('.ui.modal').modal('hide');
        $('.ui.modal').modal('hideDimmer');
        console.log(apiReturn);
      })
      .catch(() => {
          this.activeSession = false;
      });
    });
  }

  upload() {
    this.myCoolUploader.onBuildItemForm = (item, form) => {
      form.append('loginEmail', this.loginEmail);
      form.append('loginPassword', this.loginPassword);
    };

    this.myCoolUploader.onSuccessItem   = (item, response) => {
      console.log(response);
    };

    this.myCoolUploader.onErrorItem     = (item, response) => {
      console.log('error');
      console.log(response);
    };

    alert('form submitted');
    this.myCoolUploader.uploadAll();
  }


}
