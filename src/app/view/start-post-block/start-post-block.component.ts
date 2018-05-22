import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-start-post-block',
    templateUrl: './start-post-block.component.html',
    styleUrls: ['./start-post-block.component.css'],
    providers: [GetdataService]
})
export class StartPostBlockComponent implements OnInit {
    public data: Subscription;
    public datalist;
    public datas = [];
    public itemdata;
    public carouselTileItems: Array<any>;
    public carouselOne: NgxCarousel;
    constructor(
        private service: GetdataService,
        public router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.carouselOne = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        }

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
