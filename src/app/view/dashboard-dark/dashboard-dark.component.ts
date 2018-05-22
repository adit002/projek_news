import { Component, OnInit,  Input, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-dashboard-dark',
    templateUrl: './dashboard-dark.component.html',
    styleUrls: ['./dashboard-dark.component.css'],
    providers: [LocalStorageService]
})
export class DashboardDarkComponent implements OnInit {
    public path;
    public name;
    public menushow: boolean;
    public UserLogin;
    // public active = {
    //     home: false,
    //     lineNews: false,
    //     dashboarddark: false,
    //     contentnews: false,
    //     detailnews: false,
    //     headerforum: false,
    //     categoryforum: false,
    //     latesforum: false,
    //     contentforum: false,
    //     commentnews: false,
    //     topicforum: false,
    //   }
    constructor(
        private localStorageService: LocalStorageService,
    ) {
        this.path = 'main';
        this.name = '';

    }

    onLogin(){
       this.path ="login";

    }
    ngOnInit() {
        let currUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log("curUser", currUser)
        this.UserLogin = currUser.Username;
        // console.log("this.UserLogin = currUser.Username;",this.UserLogin = currUser.Username;)
        // let pathArray: any = window.location.pathname.split('/');
        // console.log("this.path",this.path)
        // switch (pathArray[1]) {
           
        //     case 'login':
        //         this.path =pathArray;
        //         break;

        //     case '':
        //         this.path = pathArray;
        //         break;

        //     case 'register':
        //         this.path = pathArray;
        //         break;

        //     case 'home':
        //         this.path = 'main';
        //         // this.active.home = true;
        //         break;

        //     case 'lineNews':
        //         this.path = 'main';
        //         // this.active.lineNews = true;
        //         break;

        //     case 'dashboard-dark':
        //         this.path = 'main';
        //         // this.active.dashboarddark = true;
        //         break;

        //     case 'content-news':
        //         this.path = 'main';
        //         // this.active.contentnews = true;
        //         break;

        //     case 'detail-news':
        //         this.path = 'main';
        //         // this.active.detailnews = true;
        //         break;

        //     case 'header-forum':
        //         this.path = 'main';
        //         // this.active.headerforum = true;
        //         break;

        //     case 'category-forum':
        //         this.path = 'main';
        //         // this.active.categoryforum = true;
        //         break;

        //     case 'lates-forum':
        //         this.path = 'main';
        //         // this.active.latesforum = true;
        //         break;

        //     case 'content-forum':
        //         this.path = 'main';
        //         // this.active.contentforum = true;
        //         break;

        //     case 'topic-forum':
        //         this.path = 'main';
        //         // this.active.topicforum = true;
        //         break;

        //     case 'comment-news':
        //         this.path = 'main';
        //         // this.active.commentnews = true;
        //         break;
        //     case 'detail-news/:some-data':
        //         this.path = 'main';
        //         // this.active.detailnews = true;
        //         break;

        //     default:
        //         this.path = 'main';

        //         break;


            //   case 'dashboard-dark':
            //       document.getElementById('dashboard-dark').style.display = 'none';
            //       break;
            //   case 'login':
            //       document.getElementById('dashboard-dark').style.display = 'none';
            //       break;
            //   case 'register':
            //       document.getElementById('dashboard-dark').style.display = 'none';
            //       break;
        // }
    }

    // menu(val) {
    //     let pathArray: any = window.location.pathname.split('/');
    //     // if(pathArray=="graph"){
    //     //   this.graphMenu = true;
    //     // }
    
    //     this.active = {
    //         home: false,
    //         lineNews: false,
    //         dashboarddark: false,
    //         contentnews: false,
    //         detailnews: false,
    //         headerforum: false,
    //         categoryforum: false,
    //         latesforum: false,
    //         contentforum: false,
    //         commentnews: false,
    //         topicforum: false,
    //     }
        
    //     switch (val) {
    //       case 'home': this.active.home = true; break;
    //       case 'lineNews': this.active.lineNews = true; break;
    //       case 'dashboard-dark': this.active.dashboarddark = true; break;
    //       case 'content-news': this.active.contentnews = true; break;
    //       case 'detail-news': this.active.detailnews = true; break;
    //       case 'header-forum': this.active.headerforum = true; break;
    //       case 'category-forum': this.active.categoryforum = true; break;
    //       case 'lates-forum': this.active.latesforum = true; break;
    //       case 'content-forum': this.active.contentforum = true; break;
    //       case 'comment-news': this.active.commentnews = true; break;
    //       case 'topic-forum': this.active.topicforum = true; break;
    //       default:
    //         break;
    //     }
    //   }
    
    //   menuShow() {
    //     if (this.menushow) {
    //       this.menushow = false;
    //     } else {
    //       this.menushow = true;
    //     }
    //   }

    logout() {
    // remove all cache and go to login page
    localStorage.removeItem('currentUser');
    // localStorage.removeItem('userPermission');
    localStorage.clear();
    window.location.href = "/";
  }


}
