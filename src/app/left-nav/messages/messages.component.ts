import { AuthService       } from '../../../app/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { Http              } from '@angular/http';
declare const $: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Stores Active Client-Side User
  clientUser:    any = {};
  activeSession: boolean;

  constructor
  (
    private AuthOperator:  AuthService,
    private RouterControl: Router,
    private HttpTransport: Http
  ) { }

  ngOnInit() {

    this.AuthOperator.loggedIn$.subscribe((activeUser) => {
      if (activeUser) {
        this.clientUser = activeUser;
        this.activeSession = true;
      } else {
        this.activeSession = false;
        this.clientUser = null;
      }
    });

    this.AuthOperator.checkSession ()
        .then((sessionUser) => {
        this.activeSession = true;
        this.clientUser = sessionUser;
        console.log('sessionUser');
        console.log(sessionUser);
        console.log('clientUser messages');
        console.log(this.clientUser.message);
    })
    .catch(() => {
        this.activeSession = false;
        console.log('activeSession');
        console.log(this.activeSession);
    });
  }

}
