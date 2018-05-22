import { Component, OnInit } from '@angular/core';
import {GetdataService} from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-line-news',
  templateUrl: './line-news.component.html',
  styleUrls: ['./line-news.component.css'],
  providers: [GetdataService]
})
export class LineNewsComponent implements OnInit {
  public data: Subscription;
  public datalist;
  public datas = [];
  public itemdata;

  constructor(
      public router: Router,
      private service: GetdataService,
      private route: ActivatedRoute,
  )
  { }

  ngOnInit() {
      let pathArray: any = window.location.pathname.split('/');
      switch (pathArray[1]) {
          case 'detail-news':
              document.getElementById('dashboard-line').style.display = 'none';
              break;
      }
    this.data = this.service.getList('all',10).subscribe(res => {
          this.datalist = res;
          for (let i = 0; i < this.datalist.length; i++) {
              this.datas.push(this.datalist[i]);
          }
      })

  }


}
