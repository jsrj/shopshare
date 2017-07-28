import { AuthService       } from '../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { Http              } from '@angular/http';
import { environment       } from '../../../environments/environment';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {

  // Stores Active Client-Side User
  clientUser: any = {};

  // To satisfy NG Build
  listingTitle: any;
  listingType: any;
  equipmentArray: any;
  listingHasPrerequisites: any;
  listingZip: any;
  listingCity: any;
  listingState: any;
  listingCountry: any;
  listingPrice: any;
  listingPerRate: any;
  listingDeposit: any;
  listingDepositAmount: any;
  listingCancellationWindow: any;
  listingAdditionalInfo: any;
  facilitySubType: any;
  facilityTraits: any;
  facilityDescription: any;
  facilityIsMultiUser: any;
  PPEProvided: any;
  PPEList: any;
  safetyFeatures: any;
  additionalNotes: any;

  // ACTIVE SESSION STATUS
  activeSession:          boolean = this.clientUser.online || false;
  activeView:             string;

  // Data from Front End Form
  formData: object;

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
  }
  generateListing(
    // Basic Listing Info
    listingTitle             /* 1 */,
    listingType              /* 2 */,
    equipmentArray           /* 3 */,
    listingHasPrerequisites  /* 4 */,

    // Location Data
    listingZip     /* 5 */,
    listingCity    /* 6 */,
    listingState   /* 7 */,
    listingCountry /* 8 */,

    // Price Policy Data
    listingPrice              /* 9 */,
    listingPerRate            /* 10 */,
    listingDeposit            /* 11 */,
    listingDepositAmount      /* 12 */,
    listingCancellationWindow /* Number - hours */,

    // General Info
    listingAdditionalInfo     /* String */,

    type,
    // Facility
    facilitySubType,
    facilityTraits,
    facilityDescription,
    facilityIsMultiUser,
    PPEProvided,
    PPEList,
    safetyFeatures,
    additionalNotes,

    // Equipment
    powerType,
    equipmentIsRestricted,
    requiredLiscense,
    isPortable,
    isHazardous,
    extras,

    // Service
    isPhysicalLocation,
    skillsOffered,
    serviceDescription
  ) {


    if (type === 'facility') {
  // FORM DATA
    this.formData = {
              listingTitle:              listingTitle,
              listingType:               listingType,
              equipment:                 equipmentArray,
              listingHasPrerequisites:   listingHasPrerequisites,

              listingZip:                listingZip,
              listingCity:               listingCity,
              listingState:              listingState,
              listingCountry:            listingCountry,
              listingPrice:              listingPrice,
              listingPerRate:            listingPerRate,
              listingDeposit:            listingDeposit,
              listingDepositAmount:      listingDepositAmount,
              listingCancellationWindow: listingCancellationWindow,
              listingAdditionalInfo:     listingAdditionalInfo,

              listingFacilitySubType:     facilitySubType,
              listingFacilityTraits:      facilityTraits,
              listingFacilityDescription: facilityDescription,
              listingIsMultiUser:         facilityIsMultiUser,
              listingPPEProvided:         PPEProvided,
              listingPPEList:             PPEList,
              listingSafetyFeatures:      safetyFeatures,
              listingAdditionalNotes:     additionalNotes
      };
  // FORM DATA
      console.log('generating new facility listing');
      console.log(this.formData);
    }

    if (type === 'equipment') {
    // FORM DATA
    this.formData = {
              listingTitle:              listingTitle,
              listingType:               listingType,
              equipment:                 equipmentArray,
              listingHasPrerequisites:   listingHasPrerequisites,

              listingZip:                listingZip,
              listingCity:               listingCity,
              listingState:              listingState,
              listingCountry:            listingCountry,
              listingPrice:              listingPrice,
              listingPerRate:            listingPerRate,
              listingDeposit:            listingDeposit,
              listingDepositAmount:      listingDepositAmount,
              listingCancellationWindow: listingCancellationWindow,
              listingAdditionalInfo:     listingAdditionalInfo,

              listingPowerType:             powerType,
              listingEquipmentIsRestricted: equipmentIsRestricted,
              requiredLiscense:             requiredLiscense,
              listingIsPortable:            isPortable,
              listingIsHazardous:           isHazardous,
              listingExtras:                extras
      };
    // FORM DATA
      console.log('generating new equipment listing');
      console.log(this.formData);
    }

    if (type === 'service') {
    // FORM DATA
          this.formData = {
              listingTitle:              listingTitle,
              listingType:               listingType,
              equipment:                 equipmentArray,
              listingHasPrerequisites:   listingHasPrerequisites,

              listingZip:                listingZip,
              listingCity:               listingCity,
              listingState:              listingState,
              listingCountry:            listingCountry,
              listingPrice:              listingPrice,
              listingPerRate:            listingPerRate,
              listingDeposit:            listingDeposit,
              listingDepositAmount:      listingDepositAmount,
              listingCancellationWindow: listingCancellationWindow,
              listingAdditionalInfo:     listingAdditionalInfo,

              listingIsPhysicalLocation: isPhysicalLocation,
              listingSkillsOffered:      skillsOffered,
              listingDescription:        serviceDescription
      };
    // FORM DATA
      console.log('generating new service listing');
      console.log(this.formData);
    }
    return this.HttpTransport.post
          (
            `${environment.apiBase}/listing/new/` + type, this.formData ).subscribe(res => {
            console.log(res);
    });
  }

}
