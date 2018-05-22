import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [GetdataService]
})
export class DetailComponent implements OnInit {
  public data: Subscription;
  public lastcomment = [];
  public allcomment=[];
  public datalist;
  public datas = [];
  public detaildata;
  public detailNews = [];
  public keyword;
  public sub;
  public params;
  comments: Comment[];
  comment = new Comment();
  constructor(
    private service: GetdataService,
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.params = params['some-data'];
    });
    this.data = this.service.getDetail(this.params).subscribe(res => {
      this.detaildata = res;
      this.detailNews.push(this.detaildata);
    })
  }

}
