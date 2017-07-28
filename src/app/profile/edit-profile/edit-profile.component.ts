import { Component, OnInit } from '@angular/core';
import { AuthService       } from '../../auth.service';
declare const $: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  clientUser: any;
  activeSession: boolean;

  constructor
  (
    private AuthOperator:  AuthService
  ) { }

  ngOnInit() {
        this.AuthOperator.loggedIn$.subscribe((activeUser) => {
          console.log(activeUser);
      if (typeof activeUser === 'object') {
        console.log('active user found');
        this.clientUser = activeUser;
      } else {
        this.clientUser = null;
        console.log('no active user');
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
      console.log('edit profile ngOnInit is running');
      const clientLoad = setInterval(() => {
        console.log(this.clientUser);
        if (this.clientUser) {
          clearInterval(clientLoad);
        }
      }, 100);
  }

}
