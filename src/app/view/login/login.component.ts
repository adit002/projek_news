import { Component, OnInit , Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetdataService } from "../../services/getdata.service";
// import { ListIPAddress } from '../../config/ipconfig';
import { LocalStorageService } from 'angular-2-local-storage';
import { FormBuilder, Validators } from '@angular/forms';
// import { window } from 'rxjs/operators/window';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Window } from 'selenium-webdriver';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GetdataService, LocalStorageService]
})
export class LoginComponent implements OnInit {
  public datas: Subscription;
  public loginShow;
  public messageLogin: string;

  public loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  constructor(
    private service: GetdataService,
    private localStorageService: LocalStorageService,
    public fb: FormBuilder,
    private _service: NotificationsService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }


  ngOnInit() {
    
    const username = this.activatedRoute.snapshot.paramMap.get('username');
    const password = this.activatedRoute.snapshot.paramMap.get('password');
    if (username && password) {
      this.getBypassParam(username, password);
    }
    // this.themeConfig("light");

    let user: any = this.localStorageService.get('user');
    if (user) {
      window.location.href = "/home";
    }
  }

  getBypassParam(username, password) {
    let data: any = {};
    data.username = username;
    data.password = password;
    this.loginProcess(data);
    
  }


  loginProcess(event) {
    
    console.log("event", event)
    this.loginShow = true;
    let data = this.loginForm.value;
    this.datas = this.service.loginUser(data).subscribe(res => {
      console.log("pas", res.password)
      
      if (res.status) {
        
        // let data = res.data;
        // let user = JSON.stringify(data);
        // this.localStorageService.set('user', user);
        // this.router.navigate(['/home']);
        localStorage.setItem('currentUser', JSON.stringify({
          UserId: res.data[0]._id,
          Username: res.data[0].username,
          email: res.data[0].email,
          loggedIn: true,
          
        }));
        window.location.href = "/home";
        // window.location.reload();
      } else {
        this.messageLogin = 'Username or Password you\'ve entered is incorrect';
        this.loginShow = false;
        this._service.error(
          'Login Failed',
          'Check your username or password again !',
          {
          }
        )
      }
    }, error => { });
   
  }
  // onM(){
  //   window.location.reload();
  // }

}