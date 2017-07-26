import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';
import { Http       } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActiveSessionService {

// private loggedInSource = new Subject<any>();
// loggedIn$ = this.loggedInSource.asObservable();

  constructor(
    private HttpTransport: Http
  ) { }


}
