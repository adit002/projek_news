import { Component, OnInit } from '@angular/core';
import {GetdataService} from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
  providers: [GetdataService]
})
export class LatestNewsComponent implements OnInit {
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
    this.data = this.service.getList('all',4).subscribe(res => {
          this.datalist = res;
          for (let i = 0; i < this.datalist.length; i++) {
              console.log(this.datalist[i])
              this.datas.push(this.datalist[i]);
              console.log("this.datass21",this.datas)
          }
      })

  }

}
