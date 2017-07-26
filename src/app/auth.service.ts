import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';
import { Http       } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

// Checks for active User Session
private loggedInSource = new Subject<any>();
loggedIn$ = this.loggedInSource.asObservable();

// Reports which listing category user is filtering by
private filterCategory = new Subject<any>();
filterBy$ = this.filterCategory.asObservable();

  constructor(
    private HttpTransport: Http
  ) { }

  ///// -[#]- [REGISTRATION POST ROUTE] ----- >>>>>
    // POST signup
      // An argument for each 'req.body' in the API route
      signup(
          firstName,
          lastName,
          userName,
          email,
          signupPassword,
          userCity,
          userState,
          userCountry,
          userZip
      ) {
        return this.HttpTransport.post
          (
            'http://localhost:14500/auth/signup',
            {
              firstName        : firstName,
              lastName         : lastName,
              userName         : userName,
              email            : email,
              registerPassword : signupPassword,
              city             : userCity,
              state            : userState,
              country          : userCountry,
              zip              : userZip
            },
            {
              // ALLOW COOKIES TO BE SENT ACROSS DOMAINS
              withCredentials: true
            }
          )
          .toPromise()
          .then(res => res.json())
          .then((userInfo) => {
          this.querySession(userInfo);
          return userInfo;
        });
      }
  ///// -[@]- [REGISTRATION POST ROUTE] ----- -end-

  ///// -[#]- [ END ACTIVE SESSION ] ----- >>>>>
    logout() {
    return this.HttpTransport.post(
        'http://localhost:14500/auth/session/end',

        // Nothing to send to the back end
        {},
        {withCredentials: true}
      )
      .toPromise()
      .then(res => res.json())
      .then((userInfo) => {
          this.querySession(false);
          return userInfo;
        });
    }
  ///// -[@]- [ END ACTIVE SESSION ] ----- -end-

  ///// -[#]- [ LOG IN PRE-EXISTING USER ] ----- >>>>>
    // POST login
    login(theEmail, thePassword) {
      return this.HttpTransport
      .post(
        'http://localhost:14500/auth/login',
        {
          loginEmail: theEmail,
          loginPassword: thePassword
        },
        {withCredentials: true}
      )
      .toPromise()
      .then(res => res.json())
      .then((userInfo) => {
          this.querySession(userInfo);
          return userInfo;
        });
    }
  ///// -[@]- [ LOG IN PRE-EXISTING USER ] ----- -END-

  querySession(sessionState) {
    this.loggedInSource.next(sessionState);
  }

  ///// -[#]- [ PING ACTIVE SESSION ] ----- >>>>>
    // GET checklogin
    checkSession() {
      return this.HttpTransport.get(
          'http://localhost:14500/auth/session/check',

          // Allow cross-domain transfer of cookies
          {withCredentials: true}
        )
        .toPromise()
        .then(res => res.json())
        .then((userInfo) => {
          this.querySession(userInfo);
          return userInfo;
        });
    }
  ///// -[@]- [ PING ACTIVE SESSION ] ----- -end-

  // SORT-BY SECTION
    sortBy(name) {
      this.filterCategory.next(name);
    }
// SORT-BY SECTION
}
