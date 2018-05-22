import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      let pathArray: any = window.location.pathname.split('/');
      console.log('path : ',pathArray[1]);
      // switch (pathArray[1]) {
      //     case 'login':
      //         document.getElementById('node').style.display = 'none';
      //         break;
      //     case 'register':
      //         document.getElementById('node').style.display = 'none';
      //         break;
      // }
  }


}
