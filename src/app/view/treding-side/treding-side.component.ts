import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { letProto } from "rxjs/operator/let";

@Component({
    selector: 'app-treding-side',
    templateUrl: './treding-side.component.html',
    styleUrls: ['./treding-side.component.css'],
    providers: [GetdataService]
})
export class TredingSideComponent implements OnInit {

    public data: Subscription;
    public datalist;
    public dataMost;
    public dataNews = [];
    public itemNews ;
    public countNews = [];
    public mostViews = [];

    constructor(
        public router: Router,
        private service: GetdataService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        let pathArray: any = window.location.pathname.split('/');
        switch (pathArray[1]) {
            case 'detail-news':
                document.getElementById('dashboard-line').style.display = 'none';
                break;
        }
        this.data = this.service.getList('all', 1).subscribe(res => {
            this.datalist = res;
            for (let i = 0; i <= this.datalist.length; i++) {
                this.dataNews.push(this.datalist[i]);
                console.log("this.dataNews",this.dataNews)
                this.countNews.push(i);
            }
        });
        this.data = this.service.getList('all', 3).subscribe(res => {
            this.itemNews = res;
        });

        this.data = this.service.getList('all', 5).subscribe(res => {
            this.dataMost = res;
            for (let i = 0; i <= this.dataMost.length; i++) {
                this.mostViews.push(this.dataMost[i]);
            }
        });
       

    }

    
}
