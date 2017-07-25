import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // LOGIN FORM FIELDS
  loginEmail:    string;
  loginPassword: string;

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
          $('.ui.modal').modal('hide');
          $('.ui.modal').modal('hideDimmer');
          this.RouterControl.navigate(['']);
          console.log(apiReturn);
      });
    }
}
