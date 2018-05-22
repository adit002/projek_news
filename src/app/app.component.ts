import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
    constructor() { }
    ngOnInit() {
        // let pathArray: any = window.location.pathname.split('/');
        // console.log(pathArray[1]);
        // switch (pathArray[1]) {
        //     case 'login':
        //         document.getElementById('hidden').style.display = 'none';
        //         break;
        // }
    }
}
