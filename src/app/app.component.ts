import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopShare';

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
    alert('Home clicked');
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

  navigateSetn() {
    alert('Settings clicked');
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


// Registration Forms Sections
    register() {
      $('.ui.large.modal#register-form')
      .modal('show');
    }
    hideWindow() {
      $('.ui.modal').modal('hide');
      $('.ui.modal').modal('hideDimmer');
    }
    continueToUserLocation() {
      $('.ui.modal#location-form').modal('show');
      $('.ui.modal#register-form').modal('hide');
    }
    backToCredentials() {
      $('.ui.modal#register-form').modal('show');
      $('.ui.modal#location-form').modal('hide');
    }
    submitRegistration() {

    }
// Registration Forms Section

}
// Displays jQuery version, and as such, confirms it is working
console.log(`jQuery version: ${$.fn.jquery}`);

// Non-(click) UI Events
  $(document).ready(function() {
    $('.ui.dropdown').dropdown()
    ;
    $('.ui.menu .dropdown').dropdown({on: 'hover'});
  });




