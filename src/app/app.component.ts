import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ShopShare';
  logoutError: string;

  // ACTIVE SESSION STATUS
  activeSession:     Boolean = false;

  // Stores Active Client-Side User
  clientUser: any = {};

    constructor
  (
    private AuthOperator:  AuthService,
    private RouterControl: Router
  ) { }

  ngOnInit() {
        this.AuthOperator.checkSession()
            .then((sessionUser) => {
            this.clientUser = sessionUser;
            console.log(this.clientUser);
        })
        .catch(() => {
            this.activeSession = false;
            this.RouterControl.navigate(['/']);
        });

        if (this.clientUser !== undefined) {
          this.activeSession = true;
        }
  }



  openMenu() {
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

  navigateHome() {
    this.AuthOperator.checkSession()
            .then((sessionUser) => {
            this.clientUser = sessionUser;
            console.log(this.clientUser);
        })
        .catch(() => {
            this.RouterControl.navigate(['/']);
        });

        if (this.clientUser !== undefined) {
          this.activeSession = true;
        }
  }

  navigateSrvc() {
    alert('Services clicked');
  }

  navigateFrnd() {
    alert('Friends clicked');
  }

  navigateHist() {
    alert('History clicked');
  }

  navigateMsgs() {
    alert('Messages clicked');
  }

  navigateCert() {
    alert('Certifications clicked');
  }

// SORT-BY SECTION
  sortByFacility() {
    $('#sub-menu').children('.item').removeClass('active');
    $('#facility').addClass('active');
  }
  sortByEquipmnt() {
    $('#sub-menu').children('.item').removeClass('active');
    $('#equipmnt').addClass('active');
  }
  sortByServices() {
    $('#sub-menu').children('.item').removeClass('active');
    $('#services').addClass('active');
  }
// SORT-BY SECTION
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
      .catch(() => {
        this.logoutError = 'Sorry, an error has occured while ending session. Please try again in a moment.';
      });
      this.RouterControl.navigate(['']);
      $('.ui.modal').modal('hide');
      $('.ui.modal').modal('hideDimmer');
    }

}
// Displays jQuery version, and as such, confirms it is working
console.log(`jQuery version: ${$.fn.jquery}`);

// Non-(click) UI Events
  // $(document).ready(function() {
  //   $('.ui.dropdown').dropdown()
  //   ;
  //   $('.ui.menu .dropdown').dropdown({on: 'hover'});
  // });




