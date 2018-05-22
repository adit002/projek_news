import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-startcontent-dark',
  templateUrl: './startcontent-dark.component.html',
  styleUrls: ['./startcontent-dark.component.css'],
  providers: [GetdataService]
})
export class StartcontentDarkComponent implements OnInit {

    public data: Subscription;
    public datalist;
    public datas = [];

    constructor(
        private service: GetdataService,
        public router: Router,
        private route: ActivatedRoute
    ) { }
  ngOnInit() {
      this.service.getList('all',2).subscribe(res => {
          this.datalist = res;
          for (let i = 0; i < res.length; i++) {
              this.datas.push(this.datalist[i])
          }
      })
  }

    public myfunc(event: Event) {
    }

    clickId(val) {
        this.router.navigate(['/detail-news', val]);
        console.log('id:',val)
    }


}
