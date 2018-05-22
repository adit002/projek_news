import { Component, OnInit , Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetdataService } from "../../services/getdata.service";
// import { ListIPAddress } from '../../config/ipconfig';
import { LocalStorageService } from 'angular-2-local-storage';
import { FormBuilder, Validators } from '@angular/forms';
// import { window } from 'rxjs/operators/window';
// import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/share';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.reload();
  }

}
