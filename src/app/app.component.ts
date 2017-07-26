import { AuthService       } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { Http              } from '@angular/http';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ShopShare';
  logoutError: string;



  // Stores Active Client-Side User
  clientUser: any = {};

  // ACTIVE SESSION STATUS
  activeSession:          boolean = this.clientUser.online;
  activeView:             string;
  filteredCategory:       string;
  searchValue: string;
    constructor
  (
    private AuthOperator:  AuthService,
    private RouterControl: Router,
    private HttpTransport: Http
  ) { }

  ngOnInit() {
    $('.ui.dropdown')
      .dropdown();

    this.activeView = 'home';
    this.sortByFacility();

    this.AuthOperator.filterBy$.subscribe((category) => {
      this.filteredCategory = category;
    });

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
            console.log(sessionUser);
        })
        .catch(() => {
            this.activeSession = false;
            console.log(this.activeSession);
        });
  }



  toggleMenu () {
    $(document).ready(() => {
            $('.left.sidebar')
              .not('.styled')
              .sidebar('setting', {
                dimPage          : true,
                transition       : 'overlay',
                mobileTransition : 'overlay',
                scrollLock: true,
                returnScroll: true
              })
            ;
            $('.left.sidebar').not('.styled').sidebar('toggle');
    });
  }

  openUserMenu () {
    $(document).ready(() => {
            $('.right.sidebar')
              .not('.styled')
              .sidebar('setting', {
                dimPage          : false,
                transition       : 'overlay',
                mobileTransition : 'overlay',
                scrollLock: true,
                returnScroll: true
              })
            ;
            $('.right.sidebar').not('.styled').sidebar('toggle');
    });
  }

// USER MENU CONTROLS
  editProfile () {
    this.activeView = 'edit-profile';
    this.openUserMenu();
  }
  viewProfile () {
    this.activeView = 'profile';
    this.openUserMenu();
  }
  viewNotifications () {
    this.activeView = 'notifications-list';
    this.openUserMenu();
  }

// NAVBAR CONTROLS
  navigateHome() {
    this.activeView = 'home';
    this.toggleMenu();
  }
  loadProfile() {
    this.activeView = 'profile';
  }
  navigateSrvc() {
    this.activeView = 'services';
    this.toggleMenu();
  }

  navigateFrnd() {
    this.activeView = 'favorites';
    this.toggleMenu();
  }

  navigateHist() {
    this.activeView = 'history';
    this.toggleMenu();
  }

  navigateMsgs() {
    this.activeView = 'messages';
    this.toggleMenu();
  }

  navigateCert() {
    this.activeView = 'certifications';
    this.toggleMenu();
  }


    login() {
      $('.ui#login-form')
      .modal('show');
    }
    register() {
      $('.ui.large.modal#register-form')
      .modal('show');
    }
    hideWindow() {
      $('.ui.modal').modal('hide');
      $('.ui.modal').modal('hideDimmer');
    }

    endSession() {
      this.AuthOperator.logout()
      .then((sessionUser) => {
            this.clientUser = sessionUser;
            console.log(this.clientUser);
            this.activeSession = false;
        })
      .catch(() => {
        this.logoutError = 'Sorry, an error has occured while ending session. Please try again in a moment.';
      });
      this.toggleMenu();
    }

  sortByFacility() {
      $('#sub-menu').children('.item').removeClass('active');
      $('#facility').addClass('active');
      this.AuthOperator.sortBy('facility');
      this.activeView = 'home';

  }

  sortByEquipmnt() {
      $('#sub-menu').children('.item').removeClass('active');
      $('#equipmnt').addClass('active');
      this.AuthOperator.sortBy('equipment');
      this.activeView = 'home';

  }

  sortByServices() {
      $('#sub-menu').children('.item').removeClass('active');
      $('#services').addClass('active');
      this.AuthOperator.sortBy('services');
      this.activeView = 'home';

  }

  submitSearch(param) {
    // Converts spaces to browser readable characters
    param = param.split(' ');
    param = param.join('%20');

    // Removes any reserved URL specific symbols
    param = param.split('/');
    param = param.join('');
    param = param.split('.');
    param = param.join('');

    const sanitizedParam = param;
    this.AuthOperator.viewByEquipment(sanitizedParam);
    console.log(sanitizedParam);
  }

}
// Displays jQuery version, and as such, confirms it is working
console.log(`jQuery version: ${$.fn.jquery}`);

// Non-(click) UI Events
  $(document).ready(function() {
    $('.ui.dropdown').dropdown();
    $('.ui.menu .dropdown').dropdown({on: 'hover'});
  });






