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

    // this.AuthOperator.sortBy('facility');
    this.AuthOperator.filterBy$.subscribe((category) => {
      this.filteredCategory = category;
    });
    console.log(this.filteredCategory);

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
            this.allListings.forEach((listing) => {

            if (typeof listing.for.facility.ppeList === 'string') {
              const array = [];
              array.push(listing.for.facility.ppeList);
              listing.for.facility.ppeList = array;
            }

            if (typeof listing.equipment === 'string') {
              const array = [];
              array.push(listing.equipment);
              listing.equipment = array;
            }

            if (typeof listing.for.facility.safetyFeatures === 'string') {
              const array = [];
              array.push(listing.for.facility.safetyFeatures);
              listing.for.facility.safetyFeatures = array;
            }

            if (typeof listing.for.facility.traits === 'string') {
              const array = [];
              array.push(listing.for.facility.traits);
              listing.for.facility.traits = array;
            }

              });
            console.log(this.allListings);
          });
        }
  consoleOutput() {
    console.log(this.allListings);
  }
  ///// -[@]- [ VIEW ALL LISTINGS ] ----- -END-


  }
