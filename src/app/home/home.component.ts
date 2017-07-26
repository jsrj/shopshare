import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { Http              } from '@angular/http';
import { AuthService       } from '../auth.service';

import { environment       } from '../../environments/environment';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor
  (
    private RouterControl: Router,
    private HttpTransport: Http,
    private AuthOperator:  AuthService
  ) { }
    allListings:      any = [];
    filteredListings: any = [];
    filteredCategory: string = 'facility';

  ngOnInit() {
    this.AuthOperator.sortBy('facility');

    this.AuthOperator.filterBy$.subscribe((category) => {
      this.filteredCategory = category;
    });

    this.AuthOperator.filteredListings$.subscribe((filterResults) => {
      this.filteredListings = filterResults;
      console.log(this.filteredListings);
    });

    this.viewAllListings();
  }

  viewAllListings() {
  ///// -[#]- [ VIEW ALL LISTINGS ] ----- >>>>>
    return this.HttpTransport.get(
            `${environment.apiBase}/listing/all`,
          )
          .subscribe(res => {
            this.allListings = res.json();
          });
        }
  consoleOutput() {
    console.log(this.allListings);
  }
  ///// -[@]- [ VIEW ALL LISTINGS ] ----- -END-


  }
