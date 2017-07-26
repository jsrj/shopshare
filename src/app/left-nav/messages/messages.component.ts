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
  clientUser: any = {};

  constructor() { }

  ngOnInit() {
    console.log()
  }

}
